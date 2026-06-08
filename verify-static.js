const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

const checks = [
  ["默认主题为苹果毛玻璃", /localStorage\.getItem\("cp_theme"\) \|\| "glass"/],
  ["打印保留彩色输出", /print-color-adjust: exact/],
  ["打印保留绿色容量条", /\.bar-fill\.ok\s*\{\s*background: #22c55e !important/s],
  ["打印保留黄色容量条", /\.bar-fill\.warn\s*\{\s*background: #f59e0b !important/s],
  ["打印保留红色容量条", /\.bar-fill\.over\s*\{\s*background: #ef4444 !important/s],
  ["顶部显示保存状态", /id="saveStatus"/],
  ["支持本地备份", /LS_BACKUPS_KEY/],
  ["支持恢复最近备份", /id="restoreBackupBtn"/],
  ["支持复制协作快照", /id="copySnapshotBtn"/],
  ["危险操作使用页面确认弹窗", /id="confirmModal"/],
  ["删除后可撤销", /已撤销删除/],
  ["卡片支持指定期下拉", /class="card-zone-select"/],
  ["卡片详情默认折叠", /class="card-more"/],
  ["顶部输入有 label 关联", /<label for="r_pm">产品（人）<\/label>/],
  ["空状态有行动入口", /data-act="emptyAdd"/],
  ["排期总结包含瓶颈角色", /当前瓶颈/],
  ["产能口径说明", /id="capacityExplain"/],
];

const failed = checks.filter(([, pattern]) => !pattern.test(html));

if (failed.length > 0) {
  console.error("静态校验失败：");
  for (const [name] of failed) console.error("- " + name);
  process.exit(1);
}

console.log(`静态校验通过：${checks.length} 项`);
