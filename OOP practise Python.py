# A User class to hold data for each user
class User:
    def __init__(self, months_subscribed, ad_free_months, video_on_demand_purchases):
        self.months_subscribed = months_subscribed
        self.ad_free_months = ad_free_months
        self.video_on_demand_purchases = video_on_demand_purchases

    # Summary of earnings for each user -- calculation
        self.months_subscribed_total = self.months_subscribed // 3 * 18 + self.months_subscribed % 3 * 7
        self.ad_free_total = self.ad_free_months * 2
        self.video_on_demand_total = self.video_on_demand_purchases * 2799 / 100.00   #27.99 *100 to avoid decimial error of python
        self.total_earning = self.months_subscribed_total + self.ad_free_total + self.video_on_demand_total

# The function to print the summary
def subscription_summary(months_subscribed, ad_free_months, video_on_demand_purchases):
    
    # To set the default value of the variables
    total_earnings_for_all = 0
    total_earnings_ads_free_video = 0
    most_profitable_account_index = ""
    most_profitable_account_earning = 0

    print("Welcome to the Ada+ Account Dashboard\n")

    for i in range(0, len(months_subscribed)):
        user = User(months_subscribed[i],
                    ad_free_months[i],
                    video_on_demand_purchases[i])

        # Req 1: Total earnings for each customer
      
        print("Account {} made ${:.2f} total".format(i + 1, user.total_earning))
        print(">>> ${:.2f} from monthly subscription fees".format(user.months_subscribed_total))
        print(">>> ${:.2f} from Ad-free upgrades".format(user.ad_free_total))
        print(">>> ${:.2f} from Video on Demand purchases".format(user.video_on_demand_total))
        print()

        # Req 2: Total earnings for all
        total_earnings_for_all = total_earnings_for_all + user.total_earning
        
        # Req 3: Total earnings for Ad-free & vedios
        total_earnings_ads_free_video = total_earnings_ads_free_video + user.ad_free_total + user.video_on_demand_total
        
        # Req 4: The most profitable customer
        if most_profitable_account_earning < user.total_earning:
            most_profitable_account_earning = user.total_earning
            most_profitable_account_index = "#" + str(i + 1)
        elif most_profitable_account_earning == user.total_earning:
            most_profitable_account_index = most_profitable_account_index + ", #" + str(i + 1)


    # Print out all result
    print("Combined all accounts made ${:.2f} total".format(total_earnings_for_all))
    print("Premium content (Ad-free watching and Video on Demand) made ${:.2f} total".format(total_earnings_ads_free_video))
    print()
    print("${:.2f} was the most earned by any single account".format(most_profitable_account_earning))
    print("The accounts that earned the most were: {}".format(most_profitable_account_index))


if __name__ == '
':    
    months_subscribed = []
    ad_free_months = []
    video_on_demand_purchases = []
    
    header = input().strip()

    while header == "months_subscribed:":
        line = input().strip()
        try:
            months_subscribed.append(int(line))
        except ValueError:
            header = line

    while header == "ad_free_months:":
        line = input().strip()
        try:
            ad_free_months.append(int(line))
        except ValueError:
            header = line

    while header == "video_on_demand_purchases:":
        try:
            line = input().strip()

            video_on_demand_purchases.append(int(line))
        except EOFError:
            header = None
            
    subscription_summary(months_subscribed, ad_free_months, video_on_demand_purchases)
