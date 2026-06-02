#
# Copyright © 2026 GemSphere Technologies Private Limited.
# All rights reserved.
#
# This source code is proprietary and confidential.
# Unauthorized copying, modification, distribution, or use of this
# file, via any medium, is strictly prohibited.
#

FROM nginx:alpine
COPY nginx.corporate.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
