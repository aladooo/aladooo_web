# -*- coding: utf-8 -*-
# 生成 aladooo.com 的 og:image（1200x630）· 方案A 视觉语言：炭黑 x 纸白 x 亮橙条
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (250, 249, 247)      # 纸白
INK = (28, 25, 23)        # 炭黑 #1c1917
MUTED = (107, 97, 84)     # 题注 #6b6154
ORANGE = (255, 90, 0)     # 亮橙 #ff5a00
GOLD = (138, 102, 58)     # 落款 #8a663a

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

def font(path, size):
    return ImageFont.truetype(path, size)

try:
    f_big = font(r"C:\Windows\Fonts\msyhbd.ttc", 92)
    f_label = font(r"C:\Windows\Fonts\msyhbd.ttc", 30)
    f_sub = font(r"C:\Windows\Fonts\msyh.ttc", 34)
except Exception:
    f_big = font(r"C:\Windows\Fonts\msyh.ttc", 92)
    f_label = f_sub = f_big

# 左上：品牌行 + 亮橙方块点
d.rectangle([96, 92, 116, 112], fill=ORANGE)
d.text((132, 84), "AladoooWu", font=f_label, fill=INK)
d.text((96, 150), "ALADOOO.COM", font=font(r"C:\Windows\Fonts\msyh.ttc", 22), fill=GOLD)

# 亮橙条（方案A 分割条语言，36x4 等比放大）
d.rounded_rectangle([96, 228, 96 + 108, 228 + 12], radius=6, fill=ORANGE)

# 主标题两行
d.text((96, 292), "把想法，", font=f_big, fill=INK)
d.text((96, 412), "做成能用的东西。", font=f_big, fill=INK)

# 右下：橙色角标
d.rectangle([W - 132, H - 132, W - 96, H - 96], fill=ORANGE)
d.rectangle([W - 88, H - 88, W - 64, H - 64], fill=INK)

img.save(r"C:\project\aladooo_web\public\og.png", optimize=True)
print("og.png saved")
