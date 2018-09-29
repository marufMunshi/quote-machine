import React from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './components/QuoteBox';
import './styles/app.scss';


class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            currentQuote: {},
            randomColor: ''
        };
        this.colorList = [
            '#878E7C',
            '#7E7C43',
            '#EEA23B',
            '#D8491D',
            '#855C3E',
            '#ECD0BB',
            '#D26E3A',
            '#013D6F',
            '#071E44',
            '#929BAC'
        ];
        this.handleQuoteChange = this.handleQuoteChange.bind(this);
    }

    componentDidMount() {
        this.generateRandomQuote();
        console.log('mount');
    }

    async generateRandomQuote() {
        try {
            const rawData = await fetch(
                'https://cdn.rawgit.com/momitrahman/e81bc416b6c2cf35f3fa1a6557b223ec/raw/c94aab94c060852463366f033d95d63cfbb7c0a5/quotes.json'
            );
            const result = await rawData.json();
            await this.setState((prevState) => {
                return {
                    quotes: prevState.quotes.concat(result)
                }
            });
            this.handleQuoteChange();
        } catch (error) {
            console.log(error);
        }
    }

    handleQuoteChange() {
        //Random Quote
        const randomNumber = Math.floor(Math.random() * this.state.quotes.length);
        const randomQuote = this.state.quotes[randomNumber];

        this.setState(() => {
            return {
                currentQuote: randomQuote
            };
        });

        // Random Color
        const randomColor = this.colorList[
            Math.floor(Math.random() * this.colorList.length)
        ];

        document.body.style.cssText = `color: ${randomColor}; background-color: ${randomColor}`;

        this.setState(() => {
            return {
                randomColor
            }
        });
    }

    render() {
        return (
            <QuoteBox 
                currentQuote={this.state.currentQuote}
                handleQuoteChange={this.handleQuoteChange}
                color={this.state.randomColor} 
            />
        );
    }
}

ReactDOM.render(
    <QuoteMachine />,
    document.getElementById('root')
);