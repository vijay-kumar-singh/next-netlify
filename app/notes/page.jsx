import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Notes'
};

const explainer = `
> SonarQube by default use master branch from gitlab/github. So if gitlab has main branch by default, please create to master branch.
For example, [Netlify Forms](https://docs.netlify.com/forms/setup/) do their magic based on automatic detection of specially-marked form tags in static HTML files. 

This has [required some adjustments](https://docs.netlify.com/forms/setup/#javascript-forms) for the age of SPA and SSR. 
With modern Next.js versions, no page is truly static: as a developer, you can revalidate any page. However, you can still use our forms.
Below is a simple form using \`fetch\` to submit its data to Netlify rather than using full-page navigation. To be detected, form tags must be hosted in static files -
and \`public/__forms.html\` exists just for this purpose.

Deploy this site to your Netlify account, [enable the forms feature in the UI](https://docs.netlify.com/forms/setup/#enable-form-detection), trigger a build and you can start collecting submissions.
`;

export default async function Page() {
    return (
        <>
            <h1>Notes</h1>
            <Markdown content={explainer} />
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}