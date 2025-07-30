# app-projects

## 🧰 Technologies Used
- Node.js / React
- Docker
- Kubernetes
- AWS EKS
- Amazon ECR
- GitHub (source code)

## How to Deploy this app to Kubernetes on AWS (EKS)

### 1. Build the Docker Image

```bash
docker build -t app-projects .
```

### 2. Push the Image to Amazon ECR

- Authenticate to ECR:
```bash
aws ecr get-login-password --region "your-region" \
  | docker login --username AWS --password-stdin "your-account-id".dkr.ecr."your-region".amazonaws.com
```

- Create repository:
```bash
aws ecr create-repository \
  --repository-name app-projects \
  --region sa-east-1
  ```

- Tag and push the image
```bash
docker tag app-projects:latest "your-account-id".dkr.ecr."your-region".amazonaws.com/app-projects:latest

docker push your-account-id.dkr.ecr.your-region.amazonaws.com/app-projects:latest
```

### 3. Create cluster EKS

```bash
eksctl create cluster \
--name "your-cluster-name" \
--region "your-region" \
--nodegroup-name "node-gp-name" \
--node-type t2.medium \
--nodes 2 \
--nodes-min 1 \
--nodes-max 3 
```

![Cluster](/public/images/cluster.png)

### 4. Configure Kubernetes archives

- deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-projects
spec:
  replicas: 2
  selector:
    matchLabels:
      app: app-projects
  template:
    metadata:
      labels:
        app: app-projects
    spec:
      containers:
      - name: app
        image: your-account-id.dkr.ecr.your-region.amazonaws.com/app-projects:latest
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
```

- service.yaml
```yaml
apiVersion: v1
kind: Service
metadata:
  name: app-projects-service
spec:
  type: LoadBalancer
  selector:
    app: app-projects
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
```


### 5. Deploy to EKS Cluster
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### 6. Verify Deployment

- Check pods:
```bash
kubectl get pods
```

- Get LB IP to access:
```bash
kubectl get svc app-projects-service
```

![App](/public/images/app.png)