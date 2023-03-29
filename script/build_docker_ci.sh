#!/usr/bin/env bash
set +e

imageName='juzi-official-website-new'

# ECR_URL from CI build job

#npm version | head -1 | grep -E -o '[0-9]{1}.[0-9]{1,2}.[0-9]{1,3}' > ./dist/release.version

# PACKAGE_VERSION from CI build job


echo current package version: "$PACKAGE_VERSION"

IMAGE_META="$( aws ecr describe-images --repository-name=$imageName --image-ids=imageTag=$PACKAGE_VERSION 2> /dev/null )"

if [[ $? == 0 ]]
then
  echo "$imageName:$PACKAGE_VERSION found, skip build docker image"
  exit 0
else
  echo "$imageName:$PACKAGE_VERSION can be created"
fi


cp Dockerfile script/Dockerfile

echo docker build -t "$imageName":"$PACKAGE_VERSION" .
docker build -t "$imageName":"$PACKAGE_VERSION" .

rm script/Dockerfile

aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_URL


echo docker tag "$imageName":"$PACKAGE_VERSION" $ECR_URL/"$imageName":"$PACKAGE_VERSION"
docker tag "$imageName":"$PACKAGE_VERSION" $ECR_URL/"$imageName":"$PACKAGE_VERSION"

echo docker push $ECR_URL/"$imageName":"$PACKAGE_VERSION"
docker push $ECR_URL/"$imageName":"$PACKAGE_VERSION"
