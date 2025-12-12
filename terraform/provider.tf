
# providers.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"    # or a specific version you prefer
    }
  }
}

provider "aws" {
  region = var.aws_region   # ensure var.aws_region is defined in variables.tf
}

