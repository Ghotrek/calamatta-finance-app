export interface StockResponse {
  quoteResponse: {
    result: QuoteResult[];
    error: any;
  }
}

export interface QuoteResult {
  language: string;
  region: string;
  quoteType: string;
  typeDisp: string;
  quoteSourceName: string;
  triggerable: boolean;
  customPriceAlertConfidence: string;
  quoteSummary: QuoteSummary;
  currency: string;
  components: string[];
  hasPrePostMarketData: boolean;
  firstTradeDateMilliseconds: number;
  priceHint: number;
  totalCash: number;
  floatShares: number;
  ebitda: number;
  shortRatio: number;
  preMarketChange: number;
  preMarketChangePercent: number;
  preMarketTime: number;
  targetPriceHigh: number;
  targetPriceLow: number;
  targetPriceMean: number;
  targetPriceMedian: number;
  preMarketPrice: number;
  heldPercentInsiders: number;
  heldPercentInstitutions: number;
  postMarketChangePercent: number;
  postMarketTime: number;
  postMarketPrice: number;
  postMarketChange: number;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: number;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayRange: string;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  sharesShort: number;
  sharesShortPrevMonth: number;
  shortPercentFloat: number;
  regularMarketPreviousClose: number;
  bid: number;
  ask: number;
  bidSize: number;
  askSize: number;
  exchange: string;
  market: string;
  messageBoardId: string;
  fullExchangeName: string;
  shortName: string;
  longName: string;
  regularMarketOpen: number;
  averageDailyVolume3Month: number;
  averageDailyVolume10Day: number;
  beta: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekLowChangePercent: number;
  fiftyTwoWeekRange: string;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  exDividendDate: number;
  earningsTimestamp: number;
  earningsTimestampStart: number;
  earningsTimestampEnd: number;
  trailingAnnualDividendRate: number;
  trailingPE: number;
  pegRatio: number;
  trailingAnnualDividendYield: number;
  revenue: number;
  priceToSales: number;
  marketState: string;
  epsTrailingTwelveMonths: number;
  epsForward: number;
  epsCurrentYear: number;
  epsNextQuarter: number;
  priceEpsCurrentYear: number;
  priceEpsNextQuarter: number;
  sharesOutstanding: number;
  bookValue: number;
  fiftyDayAverage: number;
  fiftyDayAverageChange: number;
  fiftyDayAverageChangePercent: number;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
  marketCap: number;
  forwardPE: number;
  priceToBook: number;
  sourceInterval: number;
  exchangeDataDelayedBy: number;
  exchangeTimezoneName: string;
  exchangeTimezoneShortName: string;
  pageViews: PageViews;
  gmtOffSetMilliseconds: number;
  esgPopulated: boolean;
  tradeable: boolean;
  cryptoTradeable: boolean;
  symbol: string;
  dividendDate?: number;
  dividendsPerShare?: number;
  dividendRate?: number;
  dividendYield?: number;
}

export interface QuoteSummary {
  earnings: Earnings;
}

export interface Earnings {
  maxAge: number;
  earningsChart: EarningsChart;
  financialsChart: FinancialsChart;
  financialCurrency: string;
}

export interface EarningsChart {
  quarterly: Quarterly[];
  currentQuarterEstimate: number;
  currentQuarterEstimateDate: string;
  currentQuarterEstimateYear: number;
  earningsDate: number[];
  isEarningsDateEstimate: boolean;
}

export interface Quarterly {
  date: string;
  actual: number;
  estimate: number;
}

export interface FinancialsChart {
  yearly: Yearly[];
  quarterly: Quarterly2[];
}

export interface Yearly {
  date: number;
  revenue: number;
  earnings: number;
}

export interface Quarterly2 {
  date: string;
  revenue: number;
  earnings: number;
}

export interface PageViews {
  midTermTrend: string;
  longTermTrend: string;
  shortTermTrend: string;
}
