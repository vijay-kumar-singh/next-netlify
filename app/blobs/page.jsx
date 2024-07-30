import { Markdown } from 'components/markdown';
import { ShapeEditor } from './editor';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext, uploadDisabled } from 'utils';

export const metadata = {
    title: 'JavaScript'
};

const explainer = `
The two JavaScript snippets you provided illustrate the difference between the logical OR operator (||) and the nullish coalescing operator (??). Let's break down how each of these works and the implications of their usage.

## Code Snippets

### Using Logical OR (||)

javascript
const user = { name: 'John' };
const name = user.name || 'Guest';


### Using Nullish Coalescing (??)

javascript
const user = { name: 'John' };
const name = user.name ?? 'Guest';


## Differences Explained

### 1. *Behavior with Falsy Values*

- **Logical OR (||): This operator returns the right-hand operand if the left-hand operand is falsy. Falsy values in JavaScript include false, 0, "" (empty string), null, undefined, and NaN. Therefore, if user.name is any of these falsy values, name will be assigned 'Guest'.

  *Example:*
  javascript
  ~~~js
  const user = { name: '' }; // Empty string is falsy
  const name = user.name || 'Guest'; // name will be 'Guest'
  ~~~
  - **Nullish Coalescing (??): This operator only considers null and undefined as "nullish" values. It will return the right-hand operand only if the left-hand operand is null or undefined. Any other value, including falsy values like 0 or "", will be returned as is.

  *Example:*
  javascript
  ~~~js
  const user = { name: '' }; // Empty string is not nullish
  const name = user.name ?? 'Guest'; // name will be '' (empty string)
  ~~~

### 2. *Use Cases*

- **Use || when**: You want to provide a default value for any falsy value. This is useful in scenarios where any falsy input should trigger a fallback.

- **Use ?? when**: You want to provide a default value only for null or undefined. This is particularly useful when you want to allow other falsy values (like 0 or "") to be valid.

## Summary

In summary, the key difference between the two snippets lies in how they handle different types of values:

- || will default to 'Guest' for any falsy value.
- ?? will only default to 'Guest' for null or undefined.

Understanding these differences can help you choose the appropriate operator based on your specific needs in JavaScript programming.

`;

const uploadDisabledText = `
User uploads are disabled in this site. To run your own and try it out: 
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-platform-starter">
<img src="https://www.netlify.com/img/deploy/button.svg" style="display: inline;" alt="Deploy to Netlify" />
</a>
`;

export default async function Page() {
    return (
        <>
            <section className="flex flex-col gap-6 sm:gap-8">
                <ContextAlert
                    addedChecksFunction={(ctx) => {
                        return uploadDisabled ? uploadDisabledText : null;
                    }}
                />
                <h1>JavaScript logical OR operator (||) and the nullish coalescing operator (??)</h1>
            </section>
            {!!getNetlifyContext() && (
                <div className="flex flex-col gap-8">
                    <Markdown content={explainer} />
                    <ShapeEditor />
                </div>
            )}
        </>
    );
}
