import json
import os
import re
import shutil
import time
import zipfile

from com.core.base.singleton import Singleton
from com.mvc.model.modellocator import ModelLocator


class Issue(Singleton):

    def run(self):
        base_path = os.path.join(ModelLocator.project, "release")  # Laya项目基础路径
        web_path = os.path.join(base_path, "web")

        deploy_path = os.path.join(ModelLocator.root, "assets/deploy")

        if not os.path.exists(web_path):
            return False

        release = str(int(time.time()))  # 发布文件夹 时间戳
        res_path = os.path.join(base_path, release)

        if not os.path.exists(res_path):
            os.makedirs(res_path)

        # 拷贝文件夹
        fixes = ["js", "libs"]  # 这两个文件不拷贝
        for fn in os.listdir(web_path):
            if os.path.isdir(os.path.join(web_path, fn)) and fn not in fixes:
                self.cp_dirs(web_path, res_path, fn)

        self.cp_file(web_path, res_path, "fileconfig.json")
        self.cp_file(web_path, res_path, "version.json")

        # 模版
        self.cp_dirs(deploy_path, res_path, "css")
        self.cp_dirs(deploy_path, res_path, "js")
        self.cp_file(deploy_path, res_path, "index.html")

        # js -> manifest.json
        libs = []
        js_file = os.path.join(web_path, "index.js")
        with open(js_file, "r", encoding="utf-8") as fs:
            js_list = fs.read().split(",")

        zp = zipfile.ZipFile(os.path.join(res_path, "js/code.cfg"), "w", compression=zipfile.ZIP_DEFLATED)
        for line in js_list:
            if "loadLib" in line:
                jsf = re.findall(r"([^\"]+?)\"\)", line)[0]  # 相对路径
                line = re.findall(r"([^\/]+?)\"\)", line)[0]  # 名称
                libs.append("js/" + line)

                zp.write(os.path.join(web_path, jsf), line)
        zp.close()

        manifest_file = os.path.join(res_path, "manifest.json")
        with open(manifest_file, "w", encoding="utf-8") as fs:
            fs.write(json.dumps({"libs": libs, "game": []}))

        # 修改标题
        with open(os.path.join(web_path, "index.html"), "r", encoding="utf-8") as fs:
            html = fs.read()
            title = re.findall(r"<title.*?>(.+?)</title>", html)[0]
        with open(os.path.join(res_path, "index.html"), "r", encoding="utf-8") as fs:
            html = fs.read()
            html = re.sub(r"<title.*?>(.+?)</title>", "<title>" + title + "</title>", html)
        with open(os.path.join(res_path, "index.html"), "w", encoding="utf-8") as fs:
            fs.write(html)

        return True

    @staticmethod
    def cp_dirs(src, res, ds):
        src_ds = os.path.join(src, ds)
        res_ds = os.path.join(res, ds)

        if not os.path.exists(src_ds):
            return

        # 如果目标路径存在原文件夹的话就先删除
        if os.path.exists(res_ds):
            shutil.rmtree(res_ds)

        shutil.copytree(src_ds, res_ds)

    @staticmethod
    def cp_file(src, res, fs):
        src_fs = os.path.join(src, fs)
        shutil.copy(src_fs, res)
