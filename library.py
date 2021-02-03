import glob
import os
import shutil


class Main:
    # basePath = "/Users/alpxe/code/h5/laya/laya-links"
    basePath = "/Users/alpxe/Desktop/test"

    def __init__(self):
        print("Laya引擎 切换类库后。 将必要的库导入")

        file_list = [
            # 'bundles',
            # 'library',
            'gsap',
            # 'JsBridge',
            'puremvc'
        ]

        for p in file_list:
            lp = os.path.join('assets/libs', p)
            if os.path.exists(lp):
                print("导入 {}".format(p))
                self.enter(lp)
            else:
                print("文件夹 {} 缺失,无法导入".format(p))

    def enter(self, path):
        for url in glob.glob(path + '/*.js'):
            if not os.path.basename(url).endswith('.min.js'):  # js
                shutil.copy(url, os.path.join(self.basePath, 'bin/libs'))
            else:  # min js
                shutil.copy(url, os.path.join(self.basePath, 'bin/libs/min'))

        for url in glob.glob(path + '/*.d.ts'):
            shutil.copy(url, os.path.join(self.basePath, 'libs'))


if __name__ == "__main__":
    Main()
