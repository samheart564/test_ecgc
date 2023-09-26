file_two = open("dev_tools/test2.html", "a")

def html_link(ship_name: str) -> str:
    html = "<a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://azurlane.koumakan.jp/wiki/SHIPNAME_UNDERSCORE\" title=\"SHIPNAME\">SHIPNAME</a>\n"

    shipname_underscore = ship_name.replace(" ", "_")

    html = html.replace("SHIPNAME_UNDERSCORE", shipname_underscore)
    html = html.replace("SHIPNAME", ship_name)



    return html


while True:
    
    ship = input("Enter ship name: ")


    if ship == "stop" or ship == "Stop" or ship == "quit" or ship == "q" or ship == "Q":
        print("ending")
        break

    else:
        file_two.write(html_link(ship))


file_two.close()