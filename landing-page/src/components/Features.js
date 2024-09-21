import React from 'react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Key Services</h2>
          <p className="text-lg text-gray-600">
            Empowering your financial decisions with advanced AI-driven solutions.
          </p>
        </div>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Automated Trading Systems */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Automated Trading Systems</h3>
            <p className="text-gray-600">
              Develop and deploy algorithms to execute trades based on predefined strategies. Utilize AI models to predict market movements and optimize trade execution.
            </p>
          </div>

          {/* Portfolio Management */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Portfolio Management</h3>
            <p className="text-gray-600">
              Comprehensive tools for tracking portfolio performance, asset allocation, and rebalancing, tailored to meet your investment goals.
            </p>
          </div>

          {/* Portfolio Optimization */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Portfolio Optimization</h3>
            <p className="text-gray-600">
              Apply AI and quantitative techniques to optimize portfolio returns, balancing risk and return according to your preferences.
            </p>
          </div>

          {/* Risk Management */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Risk Management</h3>
            <p className="text-gray-600">
              Advanced risk assessment tools for identifying and mitigating potential trading risks. Utilize scenario analysis and stress testing to prepare for various market conditions.
            </p>
          </div>

          {/* Market Analytics */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Market Analytics</h3>
            <p className="text-gray-600">
              Leverage real-time and historical market data analysis using machine learning models to gain insights into market trends and patterns.
            </p>
          </div>

          {/* Training and Education */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Training and Education</h3>
            <p className="text-gray-600">
              Programs focused on trading strategies, AI applications in finance, and risk management, catering to both novice and experienced traders.
            </p>
          </div>

          {/* AI Model Integration */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">AI Model Integration</h3>
            <p className="text-gray-600">
              Custom AI models for financial forecasting, strategy backtesting, and algorithm optimization, ensuring robust and reliable performance.
            </p>
          </div>

          {/* Research and Development */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Research and Development</h3>
            <p className="text-gray-600">
              Ongoing R&D to innovate and refine AI-driven trading strategies and financial models, staying ahead of industry trends.
            </p>
          </div>

          {/* Unique Value Propositions */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Unique Value Propositions</h3>
            <p className="text-gray-600">
              <strong>Integration of AI in Financial Services:</strong> Combining AI models with traditional trading and portfolio management for advanced insights and predictive capabilities.
              <br />
              <strong>Comprehensive Service Offering:</strong> From automated trading to educational resources, we cater to both novice and experienced users.
              <br />
              <strong>Risk Management Focus:</strong> Advanced tools for risk assessment and mitigation, ensuring a holistic approach to trading and investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
