# Node.js Express TypeScript app CodeDeploy to AWS EC2 from<br /> GitHub Actions using CI/CD pipeline - starter template

---

## In the project terminal paste the following to upload the project zip to AWS S3 bucket.

---

```
zip -r project.zip . -x node_modules* dist* .git* && aws s3 cp project.zip s3://typescript-express-artifact-2/code-deploy-3/project.zip

aws deploy create-deployment
--application-name "node-express-ts-app"
--deployment-config-name CodeDeployDefault.OneAtATime
--deployment-group-name ec2-app
--description "My demo deployment"
--s3-location bucket=typescript-express-artifact-2,bundleType=zip,key=code-deploy-3/project.zip
```
