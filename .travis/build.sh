#!/bin/bash

git submodule update --init
bundle exec jekyll build
bundle exec htmlproofer ./_site --assume-extension --allow-hash-href --check-html
