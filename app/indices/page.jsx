import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Classics'
};

const explainer = `
<b>Nifty Non-Cyclical Consumer Index</b>
<br>

The Nifty Non-Cyclical Consumer Index is designed to track the performance of companies within the non-cyclical consumer sector, which includes industries such as consumer goods, consumer services, telecom, media, entertainment, publication, and textiles. This index aims to represent the performance of stocks that are less sensitive to economic cycles.
Key components of the Nifty Non-Cyclical Consumer Index include:

<li>Bharti Airtel Ltd.</li>

<li>Hindustan Unilever Ltd.</li>

<li>ITC Ltd.</li>

<li>Titan Company Ltd.</li>

<li>Asian Paints Ltd.</li>

<li>Nestle India Ltd.</li>

<li>Zomato Ltd.</li>

<li>Trent Ltd.</li>

<li>Tata Consumer Products Ltd.</li>

<li>Varun Beverages Ltd.</li>

<br>

<p>These companies are leaders in their respective sectors and are known for their stable performance, making the index an attractive option for investors seeking lower volatility and consistent returns. The index has shown better performance metrics compared to broader indices like the Nifty 50 and Nifty 500, especially during market downturns​ .</p>


Refer Groww site for more details https://groww.in/p/nifty-non-cyclical-consumer-index

`;

export default async function Page() {
    return (
        <>
            <h1>Nifty Indices</h1>
            <Markdown content={explainer} />
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}