# 「排兵布阵图」静态托管镜像：基于 nginx:alpine，仅拷贝单文件 index.html
FROM nginx:alpine

# 拷贝静态页到 nginx 默认 web 根目录
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

# 使用基础镜像默认 CMD 启动 nginx（不写 CMD 减少层数）

