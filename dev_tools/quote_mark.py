file_one = open("dev_tools/test1.html", "r")
file_two = open("dev_tools/test2.html", "a")

old_file_lines = file_one.readlines()

file_lines = []

for ship in old_file_lines:
    new_ship = ship.replace("\n", "\'")
    new_ship = "guild_shop_table.innerHTML += \'" + new_ship + ";\n"

    file_lines.append(new_ship)


file_two.writelines(file_lines)





