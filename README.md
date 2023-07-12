# codearts-example-registerToWelcomePage

![](https://bbs-img.huaweicloud.com/blogs/img/20230630/1688110987306619027.gif)

## API

```typescript
/**
 * Register a command to the welcome page.
 *
 * @param label Label of the command.
 * @param command Identifier of a command to run on click.
 * @param iconPath: The icon path for command, which will show with the label.
 * @param order List sort order.
 * @return Disposable which unregisters the command from welcome page.
 */
export function registerToWelcomePage(label: string, command: string, iconPath: { dark: string; light: string } | string, order?: number): Disposable;

```
