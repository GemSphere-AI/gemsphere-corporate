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

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
