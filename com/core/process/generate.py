# -*- coding: utf-8 -*-
import os
import platform

import numpy as np
import cv2

from com.core.base.singleton import Singleton
from com.mvc.model.modellocator import ModelLocator


class Generate(Singleton):
    counter = 0

    padding = 2
    arrange = "VL"  # 布局方向 HL VL
    alignH = "M"  # 对齐方式 # 头 中 尾 F M T
    alignV = "M"
    auto_delete = False

    # root_path = os.path.abspath(os.path.dirname("."))
    # input_file_path = os.path.join('assets', 'input')  # "assets\\input"
    # output_file_path = os.path.join('assets', 'output')

    def __single__(self):
        self.input_file_path = os.path.join(ModelLocator.root, 'assets', 'input')
        self.output_file_path = os.path.join(ModelLocator.root, 'assets', 'output')

    def setting(self, arrange, alignH, alignV, padding, auto_delete):
        self.arrange = arrange
        self.alignH = alignH
        self.alignV = alignV
        self.padding = padding
        self.auto_delete = auto_delete

    def run(self):
        all_files = []
        imgs = []  # 图片数据
        max_height = 0
        max_width = 0

        if not os.path.exists(self.input_file_path):
            os.makedirs(self.input_file_path)

        for root, dirs, files in os.walk(self.input_file_path):
            # self.place_map = files
            all_files = files

        all_files.sort()
        if len(all_files) < 1:
            return

        for img_path in all_files:
            read_path = "{}/{}".format(self.input_file_path, img_path)
            # img = cv2.imread(read_path, cv2.IMREAD_UNCHANGED)
            img = cv2.imdecode(np.fromfile(read_path, dtype=np.uint8), -1)  # 中文路径处理
            if img is None:
                print(">>{}<< isn't Image".format(img_path))
                continue

            height, width, deep = img.shape

            # 支持4通道
            if deep != 4:  # 4通道图片
                png = np.zeros([height, width, 4], dtype=np.int)
                png.fill(255)
                png[:, :, :3] = img[:, :, :3]
                img = png

            print("{}x{}".format(width, height))
            if width > max_width:
                max_width = width
            if height > max_height:
                max_height = height

            imgs.append(img)

        max_width += self.padding * 2
        max_height += self.padding * 2

        if self.arrange == "HL":
            uw = max_width * len(imgs)
            uh = max_height
        elif self.arrange == "VL":
            uw = max_width
            uh = max_height * len(imgs)

        unite = np.zeros([uh, uw, 4], dtype=np.int)
        for i in range(len(imgs)):
            hs = int((max_height - imgs[i].shape[0]) / 2)
            ws = int((max_width - imgs[i].shape[1]) / 2)

            if self.alignH == "F":
                ws = self.padding
            elif self.alignH == "F":
                ws = int((max_width - imgs[i].shape[1]) / 2)
            elif self.alignH == "T":
                ws = (max_width - imgs[i].shape[1] - self.padding)

            if self.alignV == "F":
                hs = self.padding
            elif self.alignV == "F":
                hs = int((max_height - imgs[i].shape[0]) / 2)
            elif self.alignV == "T":
                hs = (max_height - imgs[i].shape[0] - self.padding)

            if self.arrange == "HL":
                ws += max_width * i
            elif self.arrange == "VL":
                hs += max_height * i

            unite[hs:hs + imgs[i].shape[0], ws:ws + imgs[i].shape[1], :] = imgs[i]

        self.open_file(self.output_file_path)
        cv2.imwrite("{}/img_{}.png".format(self.output_file_path, self.counter), unite)
        self.counter += 1
        if self.auto_delete:
            for f in os.listdir(self.input_file_path):
                if os.path.exists(os.path.join(self.input_file_path, f)):
                    os.remove(os.path.join(self.input_file_path, f))

    def open_file(self, fp):
        if not os.path.exists(fp):
            os.makedirs(fp)

        if platform.system() == "Darwin":
            os.system('open {}'.format(fp))
        else:
            os.system("start explorer {}".format(fp))
