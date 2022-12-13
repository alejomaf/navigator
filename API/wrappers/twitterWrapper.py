import tweepy
from datetime import datetime, timedelta

# Authenticate to Twitter
bearer_token = "AAAAAAAAAAAAAAAAAAAAAJUDkQEAAAAAN26Gr33dIojIDnEe3XvgXkqp2P4%3DqgpGhWrc3ZFVSvgkUyTWXqTfmkzRSVRdPNLxCRWl5KWPICPK7h"

def twitter_search_recent_tweets(road, days):
    """Searches for recent tweets regarding a specific road that are related
    with accidents or roadwork.

    Args:
        road (str): Road to search for. I.e. 'm40'
        days (int): For how many days in the past the tweets should be searched.

    Returns:
        list:
            A list with the tweets in the form {'id': ..., 'text': ...}.
    """
    client = tweepy.Client(bearer_token)
    # Configure search parameters
    search_string = f'{road}' + ' (accidente OR trafico OR atasco OR obras OR retraso OR emergencia)'
    start_time = datetime.now() - timedelta(days=days)
    
    # Perform query
    #print(f'Performing query: "{search_string}"')
    response = client.search_recent_tweets(search_string, max_results=100, start_time=start_time)

    return response.data

if __name__ == '__main__':
    tweets = twitter_search_recent_tweets('m30', 3)

    print(tweets)