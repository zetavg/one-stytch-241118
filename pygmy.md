### User Flow Description

1. **Login Flow**
   - **Login Screen**
     - Options: Email Magic Link, Google, Apple, Discord.
     - After successful login:
       - If the user is new, they are directed to the **Onboarding Flow**.
       - If the user has logged in before, they are taken to the **Home Tab**.

2. **Onboarding Flow for New Users**
   - **Create or Import Wallet**
     - **Create**: Leads to next step.
     - **Import**: Opens the **Import Wallet Screen**.
   - **Import Wallet Screen** (if Import chosen)
     - Input secret phrase (12/14 words) or private key.
     - After successful import, move to next step.
   - **Security Setup**
     - **Enable Biometrics or Create 6-digit Passkey**.
   - **Notification Settings (Optional)**
     - Option to enable or skip notifications.
   - Once onboarding is complete, user is taken to the **Home Tab**.

3. **Main App Navigation - Bottom Tabs**

   - **Home Tab**
     - **Portfolio Overview**: Displays total portfolio value, 24h change percentage, and price change chart.
     - **Token List**: Displays all tokens across chains with values and 24h change percentage.

   - **Discover Tab**
     - **Trending & New Tokens**: List of tokens across supported chains.
     - **Filters**:
       - By **Chain**.
       - By **Timespan** (24h, 1w, 1m, etc.).
     - **Search Bar**: Allows users to search for specific tokens.
     - Tap on a token to view the **Token Details Page**.

   - **Buy / Sell / Send Tab**
     - **Prefilled Largest Native Asset Balance**: Select input token based on balance.
     - **Output Token List**:
       - Trending tokens.
       - Optionally recipient address.
       - If a recipient address is chosen:
         - Show a banner indicating the user is sending to another wallet.
     - **Buy / Sell / Send Flow**:
       - For **Buy/Sell**: Fetches a quote at regular intervals.
       - **Top Bar Controls**:
         - **Swap Settings**:
           - **Slippage Tolerance**.
           - **MEV Protection** (Enable/Disable).
           - **Max Transaction Fee**.

   - **Activity Tab**
      - **Transaction History**: List of all transactions.
      - searchable and filterable by date, token, etc.

   - **Profile Tab**
   - **Theme Selection**: Choose between Dark, Light, or System theme.
   - **Currency Selection**: Change between USD, EUR, CAD, etc.
     - **Export Keys**: Secure wallet key export.
     - **Follow Us on X**: Link to social media.
     - **Legal / Privacy Policy**.

     - **Sign Out**.
     - **App Version**: Displayed at the bottom of the page.

4. **Token Details Page Flow**
   - Accessed from **Home Tab** or **Discover Tab**.
   - Displays:
     - **Price** and **Price Chart** (minute, hour, day, year timespans).
     - **Token Info** (rank, market cap, 24h volume, supply, all-time high price, description, social links).
     - **Favorite Token**: Option to add the token to favorites.
     - **Previous Transactions**: List of past transactions involving the token.
     - Entry point to **Buy/Sell/Send Tab** with the selected token as the output and a native asset token prefilled as the input.

5. **Notifications Flow**
   - **Notifications Screen**:
     - Enable/Disable notifications for the entire app.
     - **Dismiss All Notifications**.
     - **Actionable Items**: Tap on an item to navigate to the relevant part of the app (e.g., token details or transaction information).

### Flowchart Outline

Here's a simplified version of the flowchart in a textual form:

1. **Login Screen**
   - → **Onboarding Flow** (if new user)
     - **Create or Import Wallet**
       - Create → **Enable Biometrics/Passkey**
       - Import → **Import Wallet Screen**
     - → **Notification Setup**
     - → **Home Tab**
   - → **Home Tab** (if existing user)

2. **Bottom Tabs Navigation**
   - **Home Tab**
     - → **Token Details Page** (click on token)
   - **Discover Tab**
     - → **Token Details Page** (click on token)
   - **Buy / Sell / Send Tab**
     - → **Buy/Sell/Send Flow**
       - → **Recipient Notification** (if sending to another wallet)
       - → **Swap Settings** (Adjust slippage, MEV protection, max fee)
   - **Earn Tab**
     - → **Invite Friends**
     - → **Referral Breakdown**
   - **Profile Tab**
     - **Export Keys**
     - **Follow Us on X**
     - **Legal / Privacy Policy**
     - **Theme Selection**
     - **Currency Selection**
     - **Sign Out**
     - **App Version**

3. **Token Details Page**
   - **Price and Chart**
   - **Token Information** (Rank, Market Cap, etc.)
   - **Favorite Token**
   - **Previous Transactions**
   - **Buy/Sell/Send Tab Entry Point**

4. **Notifications Page**
   - **Enable/Disable Notifications**
   - **Dismiss All**
   - **Actionable Items**

### Next Steps

You can use this breakdown to create a visual representation using tools like **Lucidchart**, **Figma**, **Miro**, or **Diagrams.net (Draw.io)**. Each "box" in the visual flowchart should represent a screen, and arrows should indicate the navigation pathways.

Let me know if you'd like me to expand on a specific part of this flow or need a more detailed breakdown for any particular feature!
