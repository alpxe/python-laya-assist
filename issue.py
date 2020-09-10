import json
import os
import re
import shutil
import zipfile


class Main:
    basePath = "/Users/alpxe/code/h5/laya/laya-hexagon/release"

    def __init__(self):
        web_path = os.path.join(self.basePath, "web")
        if not os.path.exists(web_path):
            print("请先发布Laya Release")
            return

        res_path = os.path.join(self.basePath, "112358")
        if not os.path.exists(res_path):
            os.makedirs(res_path)

        # 拷贝
        self.cp_dirs(web_path, res_path, "res")
        self.cp_dirs(web_path, res_path, "skins")
        self.cp_dirs(web_path, res_path, "sound")

        self.cp_file(web_path, res_path, "fileconfig.json")
        self.cp_file(web_path, res_path, "version.json")

        self.cp_dirs("assets/deploy", res_path, "css")
        self.cp_dirs("assets/deploy", res_path, "js")
        self.cp_file("assets/deploy", res_path, "index.html")

        # js -> manifest.json
        libs = []
        js_file = os.path.join(web_path, "index.js")
        with open(js_file, "r", encoding="utf-8") as fs:
            js_list = fs.readlines()

        temp = os.path.join(res_path, "temp")
        if not os.path.exists(temp):
            os.makedirs(temp)  # 创建临时文件夹 存放js

        for line in js_list:
            if "loadLib" in line:
                # 相关js 移动到临时文件夹
                jsf = re.findall(r"([^\"]+?)\"\)[,|;]$", line)[0]
                shutil.copy(os.path.join(web_path, jsf), temp)

                # 提供json字符串
                line = re.findall(r"([^\/]+?)\"\)[,|;]$", line)[0]
                libs.append("js/" + line)

        manifest_file = os.path.join(res_path, "manifest.json")
        with open(manifest_file, "w", encoding="utf-8") as fs:
            fs.write(json.dumps({"libs": libs, "game": []}))

        # ~~~~ temp.js >> code.cfg
        zp = zipfile.ZipFile(os.path.join(res_path, "js/code.cfg"), "w", compression=zipfile.ZIP_DEFLATED)
        for child in os.listdir(temp):
            zp.write(os.path.join(temp, child), child)
        zp.close()
        shutil.rmtree(temp)

    @staticmethod
    def cp_dirs(src, res, ds):
        src_ds = os.path.join(src, ds)
        res_ds = os.path.join(res, ds)

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
