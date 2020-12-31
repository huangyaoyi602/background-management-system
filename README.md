<!--
 * @Author: hyy
 * @Date: 2020-12-29 16:58:01
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-30 11:34:37
-->

##### 项目运行

1. 安装依赖：  ```yarn ```
2. 开发运行： ```yarn start```
3. 构建运行：  ```yarn build```
#### 手动搭建项目

1. ```mkdir background-management-system```
2. ```npm init -y```
3. ```npm install typescript -g```
4. ```tsc --init``` 
5. 编写config文件夹的webpack配置文件
6. 新建src/index.html
7. 安装插件：
   
   ```
   yarn add typescript webpack webpack-cli webpack-dev-server ts-loader cross-env webpack-merge clean-webpack-plugin html-webpack-plugin -D

    yarn add react @types/react react-dom @types/react-dom -D

    yarn add redux react-redux @types/react-redux redux-logger redux-promise redux-thunk @types/redux-logger @types/redux-promise -D

    yarn add react-router-dom @types/react-router-dom connected-react-router antd -D

    yarn add eslint @typescript-eslit/eslint-plugin @typescript-eslit/parser -D

    yarn add @types/jest ts-jest -D
    ```

8. 配置package.json命令及文件
9.  安装依赖:  
10. ```yarn``` 
11. 配置eslintrc.json
12. tsconfig.json 配置jsx
13. src/index.tsx 引入路由
14. 配置状态管理mobx 
    ```
        yarn add mobx mobx-react-lite
    ```