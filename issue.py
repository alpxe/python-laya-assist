import json
import os
import re
import shutil
import time
import zipfile

"""
Laya 压缩发布功能
"""


class Main:
    # 项目 release 目录
    basePath = "/Users/alpxe/code/h5/laya/laya-hexagon/release"

    def __init__(self):
        web_path = os.path.join(self.basePath, "web")
        if not os.path.exists(web_path):
            print("请先发布Laya Release")
            return

        release = str(int(time.time()))  # 发布文件夹 时间戳
        # res_path = os.path.join(self.basePath, release)
        res_path = os.path.join(self.basePath, "rel")
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
        self.cp_dirs("assets/deploy", res_path, "css")
        self.cp_dirs("assets/deploy", res_path, "js")
        self.cp_file("assets/deploy", res_path, "index.html")

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


if __name__ == "__main__":
    Main()
