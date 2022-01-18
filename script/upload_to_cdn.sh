#!/usr/bin/env bash
echo 'Uploading...'
aws s3 cp ./public/_images s3://juzibot-official-website/images/ --acl public-read --recursive
echo 'Done'
