// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Twitter {
    uint256 TWEET_COUNT = 0;
    // TWEETS RECORD
    struct Tweet {
        string description;
        string image;
        address user;
    }

    // USERS
    mapping(uint256 => Tweet) public tweets;

    function postTweet(
        string memory description,
        string memory image
    ) public returns (bool) {
        tweets[TWEET_COUNT] = Tweet(description, image, msg.sender);
        TWEET_COUNT++;
        return true;
    }

    function getAllTweets() public view returns (Tweet[] memory) {
        Tweet[] memory alltweets = new Tweet[](TWEET_COUNT);
        for (uint256 i = 0; i < TWEET_COUNT; i++) {
            alltweets[i] = tweets[i];
        }
        return alltweets;
    }
}
