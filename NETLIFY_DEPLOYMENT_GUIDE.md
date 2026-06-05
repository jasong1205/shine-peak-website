# 🌐 Netlify部署完整指南 - 5分钟上线外贸独立站

**从零开始，手把手教你将Shine Peak网站部署到Netlify**

---

## 📋 准备工作（需要5分钟）

### 需要的材料：
```
✅ 一个邮箱账号（Gmail/Outlook/企业邮箱都可以）
✅ 网站文件夹（shine-peak-website，已准备好）
✅ 10分钟时间
❌ 不需要信用卡（免费版不需要）
❌ 不需要技术知识（纯拖放操作）
```

---

## 🎯 方法A：Netlify Drop（最简单 - 推荐）

### 步骤1️⃣：注册Netlify账户（2分钟）

```
1. 打开浏览器，访问：https://app.netlify.com/signup

2. 选择注册方式（推荐用GitHub或Google，更快）：
   ├─ 选项A: "Sign up with GitHub" （如果你有GitHub账号）
   ├─ 选项B: "Sign up with Google" （如果你有Gmail）
   └─ 选项C: "Sign up with Email" （用邮箱注册）

3. 以"Sign up with Email"为例：
   - Email: 输入你的邮箱（如 info@shinepeak.com）
   - Password: 设置密码（至少8位）
   - 点击 "Sign up"

4. 查收验证邮件：
   - 打开你的邮箱
   - 找到Netlify发的邮件（标题：Verify your email）
   - 点击邮件中的 "Verify my email" 按钮

5. 完成！你已经注册成功 🎉
```

---

### 步骤2️⃣：部署网站 - Netlify Drop（30秒）

```
1. 登录Netlify后，你会看到仪表盘（Dashboard）

2. 找到 "Add new site" 按钮（通常在右上角或中间）

3. 点击后选择 "Deploy manually"

4. 你会看到一个拖放区域（写着 "Drag and drop your site folder here"）

5. 打开文件管理器，找到 shine-peak-website 文件夹

6. 将该文件夹**直接拖入**Netlify的拖放区域

7. 等待上传（约10-30秒）

8. 完成！你会看到：
   - ✅ "Site deployed successfully!"
   - ✅ 你的网站URL（类似：https://amazing-name-123456.netlify.app）
   - ✅ 点击这个URL，就能访问你的网站了！

🎉 恭喜！你的网站已上线！
```

**注意事项**：
```
⚠️ 确保拖放的是整个 shine-peak-website 文件夹（不是里面的文件）
⚠️ 文件夹结构应该是：
    shine-peak-website/
    ├─ index.html
    ├─ css/
    ├─ js/
    └─ images/

✅ 如果上传成功，你会看到一个Netlify子域名（.netlify.app）
```

---

### 步骤3️⃣：配置Netlify Forms（接收询盘 - 重要！）

**目标**：让客户提交询盘表单后，你能在Netlify后台看到，并收到邮件通知

#### A. 修改 index.html 表单代码

在 `index.html` 中找到询盘表单（约在文件中间），确保有这样的代码：

```html
<form class="contact-form" id="inquiryForm" name="inquiry" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="inquiry">
  
  <!-- 表单字段 -->
  <div class="form-group">
    <input type="text" name="name" placeholder="Your Name *" required>
  </div>
  <div class="form-group">
    <input type="email" name="email" placeholder="Your Email *" required>
  </div>
  <!-- ... 其他字段 ... -->
  
  <button type="submit" class="btn btn-primary btn-full">
    <i class="fas fa-paper-plane"></i> Send Inquiry
  </button>
</form>
```

**关键代码**（必须添加）：
```html
<form ... name="inquiry" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="inquiry">
```

#### B. 重新部署（应用表单配置）

```
1. 保存修改后的 index.html

2. 回到Netlify仪表盘

3. 将更新后的 shine-peak-website 文件夹再次拖入（覆盖旧版本）

4. 等待部署完成（约30秒）

5. 点击 "Forms" 选项卡（在顶部菜单）

6. 你应该能看到 "inquiry" 表单（如果没有，检查代码是否正确）

✅ 配置完成！现在客户提交表单，你能在Netlify后台看到
```

#### C. 设置邮件通知（当有新询盘时自动发邮件给你）

```
1. 在Netlify仪表盘，点击 "Forms" 选项卡

2. 点击 "Settings" 按钮（右上角）

3. 找到 "Form notifications" 部分

4. 点击 "Add notification" → 选择 "Email notification"

5. 填写：
   - Email: 你的邮箱（如 info@shinepeak.com）
   - Notification type: "New form submission"

6. 点击 "Save"

✅ 完成！现在每次有新询盘，你会立即收到邮件通知
```

---

### 步骤4️⃣：测试表单（确保能收到询盘）

```
1. 访问你的网站（https://xxx.netlify.app）

2. 滚动到 "Contact Us" 部分

3. 填写测试表单：
   - Name: "Test Customer"
   - Email: "test@example.com"
   - Company: "Test Company"
   - Message: "This is a test inquiry"

4. 点击 "Send Inquiry"

5. 检查：
   - ✅ 是否看到成功消息（"Thank you for your inquiry!"）
   - ✅ 你的邮箱是否收到通知邮件
   - ✅ Netlify后台（Forms选项卡）是否显示这条询盘

如果以上都✅，恭喜！表单配置成功 🎉
```

---

### 步骤5️⃣：自定义域名（可选，但推荐）

**为什么需要自定义域名？**
```
❌ 现在：https://amazing-name-123456.netlify.app （不专业）
✅ 理想：https://shinepeak.com （专业，可信度高）

数据：使用自定义域名的网站，转化率提高30%
```

#### A. 购买域名（如果还没有）

**推荐域名注册商**：
```
1️⃣ Namecheap.com （推荐，便宜，$10-15/年）
   - 搜索域名：shinepeak.com
   - 如果已被注册，试试：
     - shinepeak-tableware.com
     - shinepeak-eco.com
     - shinepeakglobal.com

2️⃣ Google Domains （稳定，$12-15/年）
3️⃣ Cloudflare （最便宜，$9-12/年）
```

**购买步骤（以Namecheap为例）**：
```
1. 访问 namecheap.com

2. 搜索你想要的域名（如 shinepeak.com）

3. 如果可用，点击 "Add to Cart"

4. 结账时选择：
   - ✅ Whois Privacy Protection（隐藏个人信息，免费）
   - ✅ Auto-Renew（自动续费，避免过期）

5. 付款（信用卡/PayPal）

6. 完成！域名已属于你
```

#### B. 在Netlify绑定自定义域名

```
1. 登录Netlify，进入你的网站仪表盘

2. 点击 "Domain settings" 按钮（右上角）

3. 点击 "Add custom domain"

4. 输入你购买的域名（如 shinepeak.com）

5. 点击 "Verify"（验证域名所有权）

6. Netlify会显示DNS配置说明：

   你需要到域名注册商（如Namecheap）修改DNS：

   方法A - A记录（推荐）：
   ├─ Type: A
   ├─ Host: @
   └─ Value: 75.2.60.5

   方法B - CNAME记录（www子域名）：
   ├─ Type: CNAME
   ├─ Host: www
   └─ Value: your-site.netlify.app

7. 登录你的域名注册商（如Namecheap）

8. 找到 "DNS Settings" 或 "Nameservers"

9. 添加上述A记录和CNAME记录

10. 保存（DNS生效需要24-48小时，但通常1小时内就能访问）

11. 回到Netlify，刷新页面

12. 你会看到：
    - ✅ "HTTPS enabled" （SSL证书自动配置）
    - ✅ 你的自定义域名显示（如 shinepeak.com）

🎉 完成！现在访问 shinepeak.com 就能看到你的网站！
```

---

## 🎯 方法B：Netlify CLI（适合开发者）

**如果你熟悉命令行，可以用这个方法（更快）**

```bash
# 1. 安装Netlify CLI
npm install -g netlify-cli

# 2. 登录Netlify
netlify login

# 3. 初始化项目
cd shine-peak-website
netlify init

# 4. 部署
netlify deploy --prod

# 完成！网站已上线
```

---

## ✅ 部署完成检查清单

```
部署后，检查这些项目：

□ 网站能正常访问（https://xxx.netlify.app）
□ 首页加载完整（图片、CSS、JS都正常）
□ 导航链接能点击跳转
□ 手机端显示正常（用手机浏览器打开测试）
□ 询盘表单能提交
□ 表单提交后，你能收到邮件通知
□ Netlify后台（Forms）能看到询盘记录
□ （可选）自定义域名已绑定且能访问
□ （可选）SSL证书已启用（https://）

如果以上都✅，恭喜！部署完全成功 🎉
```

---

## 🔧 常见问题排查

### 问题1：拖放后网站显示404错误
```
原因：文件夹结构不正确

解决：
1. 确保拖放的是包含 index.html 的文件夹
2. 确保 index.html 在根目录（不是子文件夹里）
3. 重新拖放整个 shine-peak-website 文件夹
```

### 问题2：CSS/图片不显示
```
原因：路径错误

解决：
1. 检查 index.html 中的CSS/JS路径：
   - ✅ 正确：<link rel="stylesheet" href="css/style.css">
   - ❌ 错误：<link rel="stylesheet" href="/css/style.css"> （多了一个/）

2. 确保所有文件路径都是相对路径（不以/开头）
```

### 问题3：表单提交后没有收到邮件
```
原因：邮件通知未配置

解决：
1. 检查 index.html 表单代码是否有 data-netlify="true"
2. 在Netlify后台（Forms → Settings）添加邮件通知
3. 检查垃圾邮件文件夹（可能被误判）
```

### 问题4：自定义域名无法访问
```
原因：DNS未生效或配置错误

解决：
1. 等待24-48小时（DNS全球生效需要时间）
2. 用工具检查DNS：https://www.whatsmydns.net
3. 确认在域名注册商添加了正确的A记录和CNAME记录
4. 在Netlify后台重新触发HTTPS证书生成（Domain settings → HTTPS）
```

---

## 📊 下一步：SEO & 引流

**部署完成后，立即做这些：**

### 1️⃣ 提交给Google（让客户能找到你）
```
1. 登录 Google Search Console（免费）
   - 访问：search.google.com/search-console

2. 添加你的网站（shinepeak.com 或 xxx.netlify.app）

3. 验证所有权（选择 "HTML tag" 方法，复制代码给我，我帮你添加到网站）

4. 提交 sitemap.xml
   - 在Search Console，点击 "Sitemaps"
   - 输入：https://shinepeak.com/sitemap.xml
   - 点击 "Submit"

✅ 完成！Google会在1-3天内开始收录你的网站
```

### 2️⃣ 设置Google Analytics（追踪访客）
```
1. 登录 Google Analytics（免费）
   - 访问：analytics.google.com

2. 创建账户 + 媒体资源

3. 获取追踪代码（GA4）

4. 告诉我，我帮你添加到 index.html

✅ 完成！你能追踪所有访客数据
```

### 3️⃣ 开始引流（按照 MARKETING_STRATEGY.md）
```
✅ TikTok: 发布第一条视频
✅ Facebook: 创建Page，发布第一条帖子
✅ Instagram: 发布产品美图
✅ Google Ads: 启动第一个广告系列（$30/天）
```

---

## 🎉 总结

**你现在需要做的**：

```
今天（接下来30分钟）：
1️⃣ 注册Netlify账户（5分钟）
2️⃣ 拖放部署网站（1分钟）
3️⃣ 测试网站（5分钟）
4️⃣ 配置表单+邮件通知（10分钟）
5️⃣ 购买自定义域名（可选，9分钟）

完成后：
✅ 网站已上线
✅ 能接收询盘
✅ 专业域名（可选）

明天开始：
✅ 提交Google Search Console
✅ 设置Google Analytics
✅ 开始社媒引流（TikTok/Facebook/Instagram）
```

---

## 💬 需要帮助？

**如果遇到问题，告诉我**：
- ❓ 卡在哪一步？
- ❓ 看到什么错误信息？（截图发给我）
- ❓ 不确定怎么做？

**我会立即帮你解决！** 🚀

---

**🎯 现在开始行动：**

**选项1：你自己部署**（按照本指南，5-10分钟完成）
- 我已经写得非常详细了，照着做就行

**选项2：你遇到问题了，需要我帮忙**
- 告诉我你卡在哪一步，我帮你解决

**选项3：你想让我远程协助**
- 如果你愿意屏幕共享，我可以实时指导你操作

**告诉我你想怎么做！** 😊
