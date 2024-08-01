import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Technology'
};

const explainer = `
<li>SonarQube by default use master branch from gitlab/github. So if gitlab has main branch by default, please create to master branch.
For example, [Netlify Forms](https://docs.netlify.com/forms/setup/) do their magic based on automatic detection of specially-marked form tags in static HTML files. </li>
<br>
Javascript tech resources urls
<br>
<li>https://bigfrontend.dev/</li>
<li>https://javascript.info/</li>
`;

export default async function Page() {
    return (
        <>
            <h1>Technology/Tools/Framework/Library</h1>
            <Markdown content={explainer} />
            <div className="flex w-full pt-12 justify-center">
                <div></div>
            </div>
        </>
    );
}