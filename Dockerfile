FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build --prod

FROM nginx:alpine

COPY --from=builder /app/dist/kitchenFridgeUI/ /usr/share/nginx/html/
COPY --from=builder /app/ssl/ca_bundle.crt /var/certificates/
COPY --from=builder /app/ssl/certificate.crt /var/certificates/
COPY --from=builder /app/ssl/private.key /var/certificates/
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
