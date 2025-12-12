terraform {
  required_version = ">= 1.14"
  backend "s3" {
    bucket       = "rajesh-terraform-state-bucket"
    key          = "inventory-app/terraform.tfstate"
    region       = "us-east-1"
    use_lockfile = true
    encrypt      = true
  }
}

