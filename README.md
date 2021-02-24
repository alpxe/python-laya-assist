#### 使用说明

> 项目引用的类库
> > PyQt5  
> opencv-contrib-python-headless  
> pyperclip

- 文件夹位置
- 需要在这些目录下，准备好assets目录
    - MacOS : /Users/username/Library/Containers/LayaAssist
    - Windows : 软件根目录

```cmd
pyinstaller --windowed --clean --noconfirm --hidden-import=queue  --icon="icon/electron.icns"  name="Laya工具箱"  main.py
```
