// 根组件
// 引入核心模块里的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 使用这个组件的名称
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.less'] // css
})
export class AppComponent {
  title = 'tsCliProgram';  // 定义属性
}
