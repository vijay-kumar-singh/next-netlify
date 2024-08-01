import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Investment'
};

const explainer = `
Ray Dalio's Original All Weather Portfolio Allocation

<li>30% Stocks</li>
<li>40% Long-term Bonds</li>
<li>15% Intermediate-term Bonds</li>
<li>7.5% Gold</li>
<li>7.5% Commodities</li>

<br>
Reference Link: https://portfoliocharts.com/portfolios/all-seasons-portfolio/
<br> <br>Indian Equivalent of the All Weather Portfolio

| Asset Class            |  Percentage | Suggested Instrument                                | Note |
|------------------------|-------------|-----------------------------------------------------|------|
| Indian Stocks          | 30%         | HDFC Index Fund - NIFTY 50 Plan, Axis Midcap Fund   |      |
|------------------------|-------------|-----------------------------------------------------|------|
| Long-term Bonds        | 40%         | SBI Magnum Gilt Long Term Fund                      |      |
|------------------------|-------------|-----------------------------------------------------|------|
| Intermediate-term Bonds| 15%         | ICICI Prudential Corporate Bond Fund                |      |
|------------------------|-------------|-----------------------------------------------------|------|
| Gold                   | 7.5%        | SBI Gold ETF, Nippon India ETF Gold BeES            |      |
|------------------------|-------------|-----------------------------------------------------|------|
| Commodities            | 7.5%        | Kotak Commodity Services Fund                       |      |
|------------------------|-------------|-----------------------------------------------------|------|

Home Decor stock
<br>
<li>Asian Paint</li>
<li>Green panel</li>
<li>Rushil Decor</li>
`;

export default async function Page() {
    return (
        <>
            <h1>Investment</h1>
            <Markdown content={explainer} />
            <div className="flex w-full pt-12 justify-center">
                <div>Please note that the stock suggestions provided on this website are for educational and informational purposes only. They do not constitute investment advice and should not be taken as a recommendation to buy or sell any securities. Investing in the stock market involves risks, and you could lose some or all of your investment.</div>
            </div>
        </>
    );
}