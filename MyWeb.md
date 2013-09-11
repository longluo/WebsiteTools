# 新建一个用户组appgroup（方便按组分配权限）；
# 两个普通用户 mysql（用于运行mysql数据库）和 php（运行php进程和nginx工作进程）。

Command: groupadd appgroup && useradd -r -g appgroup mysql && useradd -r -g appgroup php









