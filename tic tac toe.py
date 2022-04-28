'''tic tac toe
   Gordon Majoni
   CSE 210'''


#creating the board game

board = ["-","-","-",
        "-","-","-",
        "-","-","-"]
currentPlayer = ""
player = "x " or "o"
winner = None
gameRunning = True



def printBoard(board):
    print(f"{board[0] }|{ board[1] }|{board[2]}")
    print("-----")
    print(f"{board[3] }|{board[4] }|{board[5]}")
    print("-----")
    print(f"{board[6] }|{board[7]}|{board[8]}")
#printBoard(board)
# game board
#player input on the board.
def player_input( board):
    player = int(input("Enter a number 1-9: "))
    if player >= 1 and player <= 9 and board[player-1] =="-":
        board[player-1] = player
    
    else:
#print Spot taken if player chose same spot.
        print("Spot taken")
#checking row win
def row_win(board):
    global winner
    if board[0] == board[1] == board[2] == board[0] !="_":
        winner =board[0]
        return True
    elif board[3] == board[4] == board[5] == board[3] !="-":
        winner = board[3]
        return True
    elif board[6] == board[7] == board[8] == board[6] !="-":
        winner = board[6]
        return True

def column_win(board):
    global winner
    if board[0] == board[3] == board[6] == board[0] !="-":
        winner = board[0]
        return True
    elif board[1] == board[4] == board[7] == board[1] !="-":
        winner = board[1]
        return True
    elif board[3] == board[5] == board[8] == board[3] !="-":
        winner = board[3]
        return True
 # checking diagonal winner       
def diagonal_win(board):
    global winner
    if board[0] == board[4] == board[8] == board[0] !="-":
        winner = board[0]
        return True
    elif board[2] == board[4] == board[6] == board[2] !="-":
        winner = board[2]
        return True
# checking a draw no winner
def draw_game(board):
    for i in range(9):
        if board[i] != "x" and board[i] != "o":
            return False
    
#checking for the winner.
def game_winner(board):
    global winner
    if row_win(board) or column_win(board) or diagonal_win(board):
        print(f"The winner is{winner}")

#current player
def next_player(currentPlayer):

    if currentPlayer == "x":
        currentPlayer = "o"
    else:
        currentPlayer = "x"

#check if player has won
while gameRunning:
    printBoard(board)
    player_input(board)
    next_player(currentPlayer)
    draw_game(board)
    game_winner(board)


