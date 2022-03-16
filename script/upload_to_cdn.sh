#!/usr/bin/env bash
echo 'Uploading...'
aws s3 rm s3://juzibot-official-website/images/*
aws s3 cp ./public/_images s3://juzibot-official-website/images --acl public-read --recursive --cache-control no-cache
echo 'Done'
