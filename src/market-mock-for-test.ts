import { StockResponse } from "./app/model/stock.interface";

export const MockMarketResponse: StockResponse = {
    quoteResponse: {
        result: [{
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Nasdaq Real Time Price",
            triggerable: true,
            customPriceAlertConfidence: "HIGH",
            quoteSummary: {
                earnings: {
                    maxAge: 86400,
                    earningsChart: {
                        quarterly: [
                            {
                                date: "2Q2024",
                                actual: 0.69,
                                estimate: 0.68
                            },
                            {
                                date: "4Q2023",
                                actual: 0.77,
                                estimate: 0.77
                            },
                            {
                                date: "1Q2024",
                                actual: 0.62,
                                estimate: 0.61
                            },
                            {
                                date: "3Q2023",
                                actual: 0.7,
                                estimate: 0.68
                            }
                        ],
                        currentQuarterEstimate: 0.91,
                        currentQuarterEstimateDate: "4Q",
                        currentQuarterEstimateYear: 2023,
                        earningsDate: [
                            1730199540,
                            1730721600
                        ],
                        isEarningsDateEstimate: true
                    },
                    financialsChart: {
                        yearly: [
                            {
                                date: 2020,
                                revenue: 9763000000,
                                earnings: 2490000000
                            },
                            {
                                date: 2021,
                                revenue: 16434000000,
                                earnings: 3162000000
                            },
                            {
                                date: 2022,
                                revenue: 23601000000,
                                earnings: 1320000000
                            },
                            {
                                date: 2023,
                                revenue: 22680000000,
                                earnings: 854000000
                            }
                        ],
                        quarterly: [
                            {
                                date: "3Q2023",
                                revenue: 5800000000,
                                earnings: 299000000
                            },
                            {
                                date: "4Q2023",
                                revenue: 6168000000,
                                earnings: 667000000
                            },
                            {
                                date: "1Q2024",
                                revenue: 5473000000,
                                earnings: 123000000
                            },
                            {
                                date: "2Q2024",
                                revenue: 5835000000,
                                earnings: 265000000
                            }
                        ]
                    },
                    financialCurrency: "USD"
                }
            },
            currency: "USD",
            components: [
                "^DWUSSR",
                "^GMB",
                "^GMBNTR",
                "^IXCO",
                "^IXIC",
                "^NQCRD",
                "^NQCRDN",
                "^NQDM9000LM",
                "^NQDM9000LMAUD",
                "^NQDM9000LMAUDN",
                "^NQDM9000LMCAD",
                "^NQDM9000LMCADN",
                "^NQDM9000LMEUR",
                "^NQDM9000LMEURN",
                "^NQDM9000LMGBP",
                "^NQDM9000LMGBPN",
                "^NQDM9000LMJPY",
                "^NQDM9000LMJPYN",
                "^NQDM9000LMN",
                "^NQDMXGBLM",
                "^NQDMXGBLMAUD",
                "^NQDMXGBLMAUDN",
                "^NQDMXGBLMCAD",
                "^NQDMXGBLMCADN",
                "^NQDMXGBLMEUR",
                "^NQDMXGBLMEURN",
                "^NQDMXGBLMGBP",
                "^NQDMXGBLMGBPN",
                "^NQDMXGBLMJPY",
                "^NQDMXGBLMJPYN",
                "^NQDMXGBLMN",
                "^NQDMXJPLM",
                "^NQDMXJPLMAUD",
                "^NQDMXJPLMAUDN",
                "^NQDMXJPLMCAD",
                "^NQDMXJPLMCADN",
                "^NQDMXJPLMEUR",
                "^NQDMXJPLMEURN",
                "^NQDMXJPLMGBP",
                "^NQDMXJPLMGBPN",
                "^NQDMXJPLMJPY",
                "^NQDMXJPLMJPYN",
                "^NQDMXJPLMN",
                "^NQDMXKR",
                "^NQDMXKRAUD",
                "^NQDMXKRAUDN",
                "^NQDMXKRCAD",
                "^NQDMXKRCADN",
                "^NQDMXKREUR",
                "^NQDMXKREURN",
                "^NQDMXKRGBP",
                "^NQDMXKRGBPN",
                "^NQDMXKRJPY",
                "^NQDMXKRJPYN",
                "^NQDMXKRLM",
                "^NQDMXKRLMAUD",
                "^NQDMXKRLMAUDN",
                "^NQDMXKRLMCAD",
                "^NQDMXKRLMCADN",
                "^NQDMXKRLMEUR",
                "^NQDMXKRLMEURN",
                "^NQDMXKRLMGBP",
                "^NQDMXKRLMGBPN",
                "^NQDMXKRLMJPY",
                "^NQDMXKRLMJPYN",
                "^NQDMXKRLMN",
                "^NQDMXKRMC",
                "^NQDMXKRMCAUD",
                "^NQDMXKRMCAUDN",
                "^NQDMXKRMCCAD",
                "^NQDMXKRMCCADN",
                "^NQDMXKRMCEUR",
                "^NQDMXKRMCEURN",
                "^NQDMXKRMCGBP",
                "^NQDMXKRMCGBPN",
                "^NQDMXKRMCJPY",
                "^NQDMXKRMCJPYN",
                "^NQDMXKRMCN",
                "^NQDMXKRN",
                "^NQDOG",
                "^NQDOGN",
                "^NQDXUSLC",
                "^NQDXUSLCEUR",
                "^NQDXUSLCEURN",
                "^NQDXUSLCG",
                "^NQDXUSLCGBP",
                "^NQDXUSLCGBPN",
                "^NQDXUSLCGN",
                "^NQDXUSLCN",
                "^NQDXUSMLTCG",
                "^NQDXUSMLTCGN",
                "^NQFFUSG",
                "^NQFFUSGN",
                "^NQFFUSM",
                "^NQFFUSMN",
                "^NQG9000LM",
                "^NQG9000LMAUD",
                "^NQG9000LMAUDN",
                "^NQG9000LMCAD",
                "^NQG9000LMCADN",
                "^NQG9000LMEUR",
                "^NQG9000LMEURN",
                "^NQG9000LMGBP",
                "^NQG9000LMGBPN",
                "^NQG9000LMJPY",
                "^NQG9000LMJPYN",
                "^NQG9000LMN",
                "^NQGXGBLM",
                "^NQGXGBLMAUD",
                "^NQGXGBLMAUDN",
                "^NQGXGBLMCAD",
                "^NQGXGBLMCADN",
                "^NQGXGBLMEUR",
                "^NQGXGBLMEURN",
                "^NQGXGBLMGBP",
                "^NQGXGBLMGBPN",
                "^NQGXGBLMJPY",
                "^NQGXGBLMJPYN",
                "^NQGXGBLMN",
                "^NQGXJPLM",
                "^NQGXJPLMAUD",
                "^NQGXJPLMAUDN",
                "^NQGXJPLMCAD",
                "^NQGXJPLMCADN",
                "^NQGXJPLMEUR",
                "^NQGXJPLMEURN",
                "^NQGXJPLMGBP",
                "^NQGXJPLMGBPN",
                "^NQGXJPLMJPY",
                "^NQGXJPLMJPYN",
                "^NQGXJPLMN",
                "^NQNA9000LM",
                "^NQNA9000LMAUD",
                "^NQNA9000LMAUDN",
                "^NQNA9000LMCAD",
                "^NQNA9000LMCADN",
                "^NQNA9000LMEUR",
                "^NQNA9000LMEURN",
                "^NQNA9000LMGBP",
                "^NQNA9000LMGBPN",
                "^NQNA9000LMJPY",
                "^NQNA9000LMJPYN",
                "^NQNA9000LMN",
                "^NQNALM",
                "^NQNALMAUD",
                "^NQNALMAUDN",
                "^NQNALMCAD",
                "^NQNALMCADN",
                "^NQNALMEUR",
                "^NQNALMEURN",
                "^NQNALMGBP",
                "^NQNALMGBPN",
                "^NQNALMJPY",
                "^NQNALMJPYN",
                "^NQNALMN",
                "^NQSSSE",
                "^NQSSSEN",
                "^NQUS500LC",
                "^NQUS500LCG",
                "^NQUS500LCGN",
                "^NQUS500LCN",
                "^NQUSB9000LM",
                "^NQUSB9000LMAUD",
                "^NQUSB9000LMAUDN",
                "^NQUSB9000LMCAD",
                "^NQUSB9000LMCADN",
                "^NQUSB9000LMEUR",
                "^NQUSB9000LMEURN",
                "^NQUSB9000LMGBP",
                "^NQUSB9000LMGBPN",
                "^NQUSB9000LMJPY",
                "^NQUSB9000LMJPYN",
                "^NQUSB9000LMN",
                "^NQUSB9570LM",
                "^NQUSB9570LMAUD",
                "^NQUSB9570LMAUDN",
                "^NQUSB9570LMCAD",
                "^NQUSB9570LMCADN",
                "^NQUSB9570LMEUR",
                "^NQUSB9570LMEURN",
                "^NQUSB9570LMGBP",
                "^NQUSB9570LMGBPN",
                "^NQUSB9570LMJPY",
                "^NQUSB9570LMJPYN",
                "^NQUSB9570LMN",
                "^NQUSB9576LM",
                "^NQUSB9576LMAUD",
                "^NQUSB9576LMAUDN",
                "^NQUSB9576LMCAD",
                "^NQUSB9576LMCADN",
                "^NQUSB9576LMEUR",
                "^NQUSB9576LMEURN",
                "^NQUSB9576LMGBP",
                "^NQUSB9576LMGBPN",
                "^NQUSB9576LMJPY",
                "^NQUSB9576LMJPYN",
                "^NQUSB9576LMN",
                "^NQUSBLM",
                "^NQUSBLMAUD",
                "^NQUSBLMAUDN",
                "^NQUSBLMCAD",
                "^NQUSBLMCADN",
                "^NQUSBLMEUR",
                "^NQUSBLMEURN",
                "^NQUSBLMGBP",
                "^NQUSBLMGBPN",
                "^NQUSBLMJPY",
                "^NQUSBLMJPYN",
                "^NQUSBLMN",
                "^NQUSMGN",
                "^NQUSMLTCG",
                "^NQUSMLTCGN",
                "^RCMP",
                "^SOX",
                "^SX",
                "^XCI",
                "^XCQ"
            ],
            sourceInterval: 15,
            exchangeDataDelayedBy: 0,
            exchangeTimezoneName: "America/New_York",
            exchangeTimezoneShortName: "EDT",
            pageViews: {
                midTermTrend: "UP",
                longTermTrend: "UP",
                shortTermTrend: "DOWN"
            },
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            longName: "Advanced Micro Devices, Inc.",
            regularMarketOpen: 167.065,
            averageDailyVolume3Month: 47740973,
            averageDailyVolume10Day: 30741850,
            beta: 1.693,
            fiftyTwoWeekLowChange: 74.37,
            fiftyTwoWeekLowChangePercent: 0.7986469,
            fiftyTwoWeekRange: "93.12 - 227.3",
            fiftyTwoWeekHighChange: -59.809998,
            fiftyTwoWeekHighChangePercent: -0.26313242,
            fiftyTwoWeekLow: 93.12,
            fiftyTwoWeekHigh: 227.3,
            exDividendDate: 798940800,
            earningsTimestamp: 1722370548,
            earningsTimestampStart: 1730199540,
            earningsTimestampEnd: 1730721600,
            trailingAnnualDividendRate: 0,
            trailingPE: 199.39287,
            pegRatio: 1.44,
            trailingAnnualDividendYield: 0,
            revenue: 23275999200,
            priceToSales: 11.646298,
            marketState: "POST",
            epsTrailingTwelveMonths: 0.84,
            epsForward: 5.43,
            epsCurrentYear: 3.41,
            epsNextQuarter: 1.15,
            priceEpsCurrentYear: 49.117302,
            priceEpsNextQuarter: 145.6435,
            sharesOutstanding: 1618480000,
            bookValue: 34.943,
            fiftyDayAverage: 146.194,
            fiftyDayAverageChange: 21.296005,
            fiftyDayAverageChangePercent: 0.14566949,
            twoHundredDayAverage: 160.6135,
            twoHundredDayAverageChange: 6.8765106,
            twoHundredDayAverageChangePercent: 0.042814028,
            marketCap: 271079227392,
            forwardPE: 30.845306,
            priceToBook: 4.793235,
            hasPrePostMarketData: true,
            firstTradeDateMilliseconds: 322151400000,
            priceHint: 2,
            totalCash: 5340000300,
            floatShares: 1607411429,
            ebitda: 4046000128,
            shortRatio: 1.16,
            preMarketChange: 5,
            preMarketChangePercent: 3.08604,
            preMarketTime: 1727357397,
            targetPriceHigh: 250,
            targetPriceLow: 140,
            targetPriceMean: 185.99,
            targetPriceMedian: 190,
            preMarketPrice: 167.02,
            heldPercentInsiders: 0.493,
            heldPercentInstitutions: 72.447,
            postMarketChangePercent: -0.06567592,
            postMarketTime: 1727381245,
            postMarketPrice: 167.38,
            postMarketChange: -0.11000061,
            regularMarketChange: 5.470001,
            regularMarketChangePercent: 3.376127,
            regularMarketTime: 1727380801,
            regularMarketPrice: 167.49,
            regularMarketDayHigh: 168.68,
            regularMarketDayRange: "164.05 - 168.68",
            regularMarketDayLow: 164.05,
            regularMarketVolume: 36553765,
            sharesShort: 46399604,
            sharesShortPrevMonth: 48226352,
            shortPercentFloat: 2.88,
            regularMarketPreviousClose: 162.02,
            bid: 167.43,
            ask: 167.64,
            bidSize: 2,
            askSize: 3,
            exchange: "NMS",
            market: "us_market",
            messageBoardId: "finmb_168864",
            fullExchangeName: "NasdaqGS",
            shortName: "Advanced Micro Devices, Inc.",
            symbol: "AMD"
        }],
        error: ''
    }
}

export const MockMarketResponseUpdated: StockResponse = {
    quoteResponse: {
        result: [{
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Nasdaq Real Time Price",
            triggerable: true,
            customPriceAlertConfidence: "HIGH",
            quoteSummary: {
                earnings: {
                    maxAge: 86400,
                    earningsChart: {
                        quarterly: [
                            {
                                date: "2Q2024",
                                actual: 0.69,
                                estimate: 0.68
                            },
                            {
                                date: "4Q2023",
                                actual: 0.77,
                                estimate: 0.77
                            },
                            {
                                date: "1Q2024",
                                actual: 0.62,
                                estimate: 0.61
                            },
                            {
                                date: "3Q2023",
                                actual: 0.7,
                                estimate: 0.68
                            }
                        ],
                        currentQuarterEstimate: 0.91,
                        currentQuarterEstimateDate: "4Q",
                        currentQuarterEstimateYear: 2023,
                        earningsDate: [
                            1730199540,
                            1730721600
                        ],
                        isEarningsDateEstimate: true
                    },
                    financialsChart: {
                        yearly: [
                            {
                                date: 2020,
                                revenue: 9763000000,
                                earnings: 2490000000
                            },
                            {
                                date: 2021,
                                revenue: 16434000000,
                                earnings: 3162000000
                            },
                            {
                                date: 2022,
                                revenue: 23601000000,
                                earnings: 1320000000
                            },
                            {
                                date: 2023,
                                revenue: 22680000000,
                                earnings: 854000000
                            }
                        ],
                        quarterly: [
                            {
                                date: "3Q2023",
                                revenue: 5800000000,
                                earnings: 299000000
                            },
                            {
                                date: "4Q2023",
                                revenue: 6168000000,
                                earnings: 667000000
                            },
                            {
                                date: "1Q2024",
                                revenue: 5473000000,
                                earnings: 123000000
                            },
                            {
                                date: "2Q2024",
                                revenue: 5835000000,
                                earnings: 265000000
                            }
                        ]
                    },
                    financialCurrency: "USD"
                }
            },
            currency: "USD",
            components: [
                "^DWUSSR",
                "^GMB",
                "^GMBNTR",
                "^IXCO",
                "^IXIC",
                "^NQCRD",
                "^NQCRDN",
                "^NQDM9000LM",
                "^NQDM9000LMAUD",
                "^NQDM9000LMAUDN",
                "^NQDM9000LMCAD",
                "^NQDM9000LMCADN",
                "^NQDM9000LMEUR",
                "^NQDM9000LMEURN",
                "^NQDM9000LMGBP",
                "^NQDM9000LMGBPN",
                "^NQDM9000LMJPY",
                "^NQDM9000LMJPYN",
                "^NQDM9000LMN",
                "^NQDMXGBLM",
                "^NQDMXGBLMAUD",
                "^NQDMXGBLMAUDN",
                "^NQDMXGBLMCAD",
                "^NQDMXGBLMCADN",
                "^NQDMXGBLMEUR",
                "^NQDMXGBLMEURN",
                "^NQDMXGBLMGBP",
                "^NQDMXGBLMGBPN",
                "^NQDMXGBLMJPY",
                "^NQDMXGBLMJPYN",
                "^NQDMXGBLMN",
                "^NQDMXJPLM",
                "^NQDMXJPLMAUD",
                "^NQDMXJPLMAUDN",
                "^NQDMXJPLMCAD",
                "^NQDMXJPLMCADN",
                "^NQDMXJPLMEUR",
                "^NQDMXJPLMEURN",
                "^NQDMXJPLMGBP",
                "^NQDMXJPLMGBPN",
                "^NQDMXJPLMJPY",
                "^NQDMXJPLMJPYN",
                "^NQDMXJPLMN",
                "^NQDMXKR",
                "^NQDMXKRAUD",
                "^NQDMXKRAUDN",
                "^NQDMXKRCAD",
                "^NQDMXKRCADN",
                "^NQDMXKREUR",
                "^NQDMXKREURN",
                "^NQDMXKRGBP",
                "^NQDMXKRGBPN",
                "^NQDMXKRJPY",
                "^NQDMXKRJPYN",
                "^NQDMXKRLM",
                "^NQDMXKRLMAUD",
                "^NQDMXKRLMAUDN",
                "^NQDMXKRLMCAD",
                "^NQDMXKRLMCADN",
                "^NQDMXKRLMEUR",
                "^NQDMXKRLMEURN",
                "^NQDMXKRLMGBP",
                "^NQDMXKRLMGBPN",
                "^NQDMXKRLMJPY",
                "^NQDMXKRLMJPYN",
                "^NQDMXKRLMN",
                "^NQDMXKRMC",
                "^NQDMXKRMCAUD",
                "^NQDMXKRMCAUDN",
                "^NQDMXKRMCCAD",
                "^NQDMXKRMCCADN",
                "^NQDMXKRMCEUR",
                "^NQDMXKRMCEURN",
                "^NQDMXKRMCGBP",
                "^NQDMXKRMCGBPN",
                "^NQDMXKRMCJPY",
                "^NQDMXKRMCJPYN",
                "^NQDMXKRMCN",
                "^NQDMXKRN",
                "^NQDOG",
                "^NQDOGN",
                "^NQDXUSLC",
                "^NQDXUSLCEUR",
                "^NQDXUSLCEURN",
                "^NQDXUSLCG",
                "^NQDXUSLCGBP",
                "^NQDXUSLCGBPN",
                "^NQDXUSLCGN",
                "^NQDXUSLCN",
                "^NQDXUSMLTCG",
                "^NQDXUSMLTCGN",
                "^NQFFUSG",
                "^NQFFUSGN",
                "^NQFFUSM",
                "^NQFFUSMN",
                "^NQG9000LM",
                "^NQG9000LMAUD",
                "^NQG9000LMAUDN",
                "^NQG9000LMCAD",
                "^NQG9000LMCADN",
                "^NQG9000LMEUR",
                "^NQG9000LMEURN",
                "^NQG9000LMGBP",
                "^NQG9000LMGBPN",
                "^NQG9000LMJPY",
                "^NQG9000LMJPYN",
                "^NQG9000LMN",
                "^NQGXGBLM",
                "^NQGXGBLMAUD",
                "^NQGXGBLMAUDN",
                "^NQGXGBLMCAD",
                "^NQGXGBLMCADN",
                "^NQGXGBLMEUR",
                "^NQGXGBLMEURN",
                "^NQGXGBLMGBP",
                "^NQGXGBLMGBPN",
                "^NQGXGBLMJPY",
                "^NQGXGBLMJPYN",
                "^NQGXGBLMN",
                "^NQGXJPLM",
                "^NQGXJPLMAUD",
                "^NQGXJPLMAUDN",
                "^NQGXJPLMCAD",
                "^NQGXJPLMCADN",
                "^NQGXJPLMEUR",
                "^NQGXJPLMEURN",
                "^NQGXJPLMGBP",
                "^NQGXJPLMGBPN",
                "^NQGXJPLMJPY",
                "^NQGXJPLMJPYN",
                "^NQGXJPLMN",
                "^NQNA9000LM",
                "^NQNA9000LMAUD",
                "^NQNA9000LMAUDN",
                "^NQNA9000LMCAD",
                "^NQNA9000LMCADN",
                "^NQNA9000LMEUR",
                "^NQNA9000LMEURN",
                "^NQNA9000LMGBP",
                "^NQNA9000LMGBPN",
                "^NQNA9000LMJPY",
                "^NQNA9000LMJPYN",
                "^NQNA9000LMN",
                "^NQNALM",
                "^NQNALMAUD",
                "^NQNALMAUDN",
                "^NQNALMCAD",
                "^NQNALMCADN",
                "^NQNALMEUR",
                "^NQNALMEURN",
                "^NQNALMGBP",
                "^NQNALMGBPN",
                "^NQNALMJPY",
                "^NQNALMJPYN",
                "^NQNALMN",
                "^NQSSSE",
                "^NQSSSEN",
                "^NQUS500LC",
                "^NQUS500LCG",
                "^NQUS500LCGN",
                "^NQUS500LCN",
                "^NQUSB9000LM",
                "^NQUSB9000LMAUD",
                "^NQUSB9000LMAUDN",
                "^NQUSB9000LMCAD",
                "^NQUSB9000LMCADN",
                "^NQUSB9000LMEUR",
                "^NQUSB9000LMEURN",
                "^NQUSB9000LMGBP",
                "^NQUSB9000LMGBPN",
                "^NQUSB9000LMJPY",
                "^NQUSB9000LMJPYN",
                "^NQUSB9000LMN",
                "^NQUSB9570LM",
                "^NQUSB9570LMAUD",
                "^NQUSB9570LMAUDN",
                "^NQUSB9570LMCAD",
                "^NQUSB9570LMCADN",
                "^NQUSB9570LMEUR",
                "^NQUSB9570LMEURN",
                "^NQUSB9570LMGBP",
                "^NQUSB9570LMGBPN",
                "^NQUSB9570LMJPY",
                "^NQUSB9570LMJPYN",
                "^NQUSB9570LMN",
                "^NQUSB9576LM",
                "^NQUSB9576LMAUD",
                "^NQUSB9576LMAUDN",
                "^NQUSB9576LMCAD",
                "^NQUSB9576LMCADN",
                "^NQUSB9576LMEUR",
                "^NQUSB9576LMEURN",
                "^NQUSB9576LMGBP",
                "^NQUSB9576LMGBPN",
                "^NQUSB9576LMJPY",
                "^NQUSB9576LMJPYN",
                "^NQUSB9576LMN",
                "^NQUSBLM",
                "^NQUSBLMAUD",
                "^NQUSBLMAUDN",
                "^NQUSBLMCAD",
                "^NQUSBLMCADN",
                "^NQUSBLMEUR",
                "^NQUSBLMEURN",
                "^NQUSBLMGBP",
                "^NQUSBLMGBPN",
                "^NQUSBLMJPY",
                "^NQUSBLMJPYN",
                "^NQUSBLMN",
                "^NQUSMGN",
                "^NQUSMLTCG",
                "^NQUSMLTCGN",
                "^RCMP",
                "^SOX",
                "^SX",
                "^XCI",
                "^XCQ"
            ],
            sourceInterval: 15,
            exchangeDataDelayedBy: 0,
            exchangeTimezoneName: "America/New_York",
            exchangeTimezoneShortName: "EDT",
            pageViews: {
                midTermTrend: "UP",
                longTermTrend: "UP",
                shortTermTrend: "DOWN"
            },
            gmtOffSetMilliseconds: -14400000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            longName: "Advanced Micro Devices, Inc.",
            regularMarketOpen: 167.065,
            averageDailyVolume3Month: 47740973,
            averageDailyVolume10Day: 30741850,
            beta: 1.693,
            fiftyTwoWeekLowChange: 74.37,
            fiftyTwoWeekLowChangePercent: 0.7986469,
            fiftyTwoWeekRange: "93.12 - 227.3",
            fiftyTwoWeekHighChange: -59.809998,
            fiftyTwoWeekHighChangePercent: -0.26313242,
            fiftyTwoWeekLow: 93.12,
            fiftyTwoWeekHigh: 227.3,
            exDividendDate: 798940800,
            earningsTimestamp: 1722370548,
            earningsTimestampStart: 1730199540,
            earningsTimestampEnd: 1730721600,
            trailingAnnualDividendRate: 0,
            trailingPE: 199.39287,
            pegRatio: 1.44,
            trailingAnnualDividendYield: 0,
            revenue: 23275999200,
            priceToSales: 11.646298,
            marketState: "POST",
            epsTrailingTwelveMonths: 0.84,
            epsForward: 5.43,
            epsCurrentYear: 3.41,
            epsNextQuarter: 1.15,
            priceEpsCurrentYear: 49.117302,
            priceEpsNextQuarter: 145.6435,
            sharesOutstanding: 1618480000,
            bookValue: 34.943,
            fiftyDayAverage: 146.194,
            fiftyDayAverageChange: 21.296005,
            fiftyDayAverageChangePercent: 0.14566949,
            twoHundredDayAverage: 160.6135,
            twoHundredDayAverageChange: 6.8765106,
            twoHundredDayAverageChangePercent: 0.042814028,
            marketCap: 271079227392,
            forwardPE: 30.845306,
            priceToBook: 4.793235,
            hasPrePostMarketData: true,
            firstTradeDateMilliseconds: 322151400000,
            priceHint: 2,
            totalCash: 5340000300,
            floatShares: 1607411429,
            ebitda: 4046000128,
            shortRatio: 1.16,
            preMarketChange: 5,
            preMarketChangePercent: 3.08604,
            preMarketTime: 1727357397,
            targetPriceHigh: 250,
            targetPriceLow: 140,
            targetPriceMean: 185.99,
            targetPriceMedian: 190,
            preMarketPrice: 167.02,
            heldPercentInsiders: 0.493,
            heldPercentInstitutions: 72.447,
            postMarketChangePercent: -0.06567592,
            postMarketTime: 1727381245,
            postMarketPrice: 167.38,
            postMarketChange: -0.11000061,
            regularMarketChange: 5.470001,
            regularMarketChangePercent: 3.376127,
            regularMarketTime: 1727380801,
            regularMarketPrice: 170.49,
            regularMarketDayHigh: 175.68,
            regularMarketDayRange: "164.05 - 168.68",
            regularMarketDayLow: 160.05,
            regularMarketVolume: 36553765,
            sharesShort: 46399604,
            sharesShortPrevMonth: 48226352,
            shortPercentFloat: 2.88,
            regularMarketPreviousClose: 162.02,
            bid: 167.43,
            ask: 167.64,
            bidSize: 2,
            askSize: 3,
            exchange: "NMS",
            market: "us_market",
            messageBoardId: "finmb_168864",
            fullExchangeName: "NasdaqGS",
            shortName: "Advanced Micro Devices, Inc.",
            symbol: "AMD"
        }],
        error: ''
    }
}