
# variables.tf
variable "state_key" {
  type    = string
  default = "inventory-app/terraform.tfstate"
}

variable "dynamodb_table_name" {
  type    = string
  default = "terraform-locks"
}

variable "aws_region" {
  type    = string
  default = "us-east-1"
}

