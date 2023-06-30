# codearts-example-registerToWelcomePage

![](https://bbs-img.huaweicloud.com/blogs/img/20230630/1688110987306619027.gif)

## API

```typescript
/**
   * Register a command to the welcome page.
   *
   * @param label Label of the command.
   * @param command Identifier of a command to run on click.
   * @param iconId Icon ID, like 'c', 'cpp'.
   * @param order View Sorting.
   * @return Disposable that unregisters the command.
*/
export function registerToWelcomePage(label: string, command: string, iconId: string, order?: number): Disposable;
```
