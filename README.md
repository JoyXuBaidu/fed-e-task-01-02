1. 
原理：通过引用计数器，记录每一个对象的引用情况，当变量被引用时，引用计数加一，当消除引用关系时，引用计数减一，当某个变量的引用计数为0时便将其视为垃圾，进行回收处理。

优点：效率高，可以实现实时的垃圾回收，有效防止程序卡顿

缺点：无法回收循环引用的变量，造成内存泄漏问题；由于对引用计数的监听和修改，时间消耗较大

2.
工作流程：每次将内存中的可达对象进行标记，然后进行内存空间的整理，避免出现内存碎片，然后将未标记的对象的空间释放

3.
流程：新生代存储主要运用复制算法+标记整理的方式进行垃圾回收。具体流程如下：

首先，新生代存储空间被分为大小相等的两块内存空间，分别为from空间和to空间；每次，当遇到新的对象进入内存时，先存放至from空间中，当from空间被占用的量达到一定比例时，开始在from中进行一次标记整理操作（不用的多余空间进行删除），最后将from中的所有保留下的结果保存至to空间中，然后from与to交换空间

4.
增量标记算法会在垃圾回收操作与程序执行操作同时竞争线程时使用，原理是将原先一整块的垃圾回收操作进行细分，细分为多个小的垃圾回收操作，使得垃圾回收能够与js程序实现交替运行的状态，最大限度保证垃圾回收操作不影响代码的实际运行操作