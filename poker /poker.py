
import random
def createDeck():
    
    """creer une deck de 52 carte 
    """
    deck = []
    color= ["♥️","♦️","♣️","♠️"]
    value = ["J","Q","K"  ]
    
    for i in range(10):
        value.append(str(i+1))
        
    for col in color:
        for val in value:
            deck.append(val + col)
    return deck
print(createDeck())

def deckShuffler(deck):

    """
    melanger de deck avec random
    """
    print(deck)
    random.shuffle(deck)
    return deck

def askNumberOfPlayer():
    numOfPlayer = input("combien de joueur ? ")
    while int(numOfPlayer) not in range(2, 7):
        numOfPlayer = input( "le nombre de joueur doit être entre 2 et 6. \n reesaiyer svp")
    return numOfPlayer

def deal (deck, numOfPlayer):
    """
    distribue du carte a les nombre de joueur
    Return la une liste de joueur
    """
    playerNewHand = []
    for player in range(int(numOfPlayer)):
        hand =[]
        for i in range(2):
            hand.append(deck[0])
            deck.pop(0)
            playerNewHand.append(hand)
    return deck , playerNewHand

def flop (deck,courrenTurn,tapisCard):
    deck.pop(0)
    if courrenTurn == 1:
        for i in range(3):
            tapisCard.append([0])
            deck.pop(0)

    else:
        tapisCard.append(deck[0])
        deck.pop(0)
    courrenTurn += 1
    return deck, courrenTurn, tapisCard


    



if __name__ == "__main__":
    nbDeJoueur = askNumberOfPlayer()
    gameDeck = deckShuffler(createDeck())
    gameDeck, playerHand = deal(gameDeck, nbDeJoueur)
    turn = 1
    cards = []
    print (gameDeck)
    while turn < 4:
        gameDeck, turn, cards = flop(gameDeck, turn, cards)
        print(gameDeck)
        print(cards)







