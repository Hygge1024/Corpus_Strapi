# Strapi application
这是口译项目的后端部分代码，使用Strapi搭建的语料资源管理后端，本项目的接口主要是提供给“大后端”SpringBoot项目来调用。

建议在使用本项目之前在本地连接好数据库，安装好相应环境

# 安装指南：

### 安装所需的环境

**MySQL**:5.7

**Nodejs**：v14.21.3

Yarn：1.22.19

**Strapi**:3.6.11

(需要在本地使用mysql建立一个名为corpusall的数据库)


### 本地运行指令
```
npm install   //安装所需依赖
npm run develop  //进入开发者模式
npm run start  //进入部署上线运行模式
```

### 特殊情况
若在启动 Strapi 时，由于无法正确安装 sharp 模块，导致服务器无法启动。可尝试输入一下指令：①“npm rebuild sharp –verbose”手动重建 sharp 模块，②“Remove-Item -Recurse -Force node_modules” windows环境删除node_modules模块，③“npm install”**重新安装依赖**
