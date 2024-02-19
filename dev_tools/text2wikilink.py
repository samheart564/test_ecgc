def generate_wiki_link(page_name):
    base_url = "https://azurlane.koumakan.jp/wiki/"
    formatted_page_name = page_name.replace(" ", "_")
    full_url = base_url + formatted_page_name
    link_html = f'<a rel="noopener noreferrer" target="_blank" href="{full_url}" title="{page_name}">{page_name}</a>\n'
    return link_html

def append_to_html_file(file_name, link):
    with open(file_name, "a") as f:
        f.write(link)

def main():
    exit_commands = {"q", "quit", "exit"}

    while True:
        page_name = input("Enter the page name (or 'q', 'quit', 'exit' to exit): ")
        stripped_page_name = page_name.strip().lower()

        if stripped_page_name in exit_commands:
            print("Exiting Loop")
            break
        else:
            link = generate_wiki_link(page_name)
            append_to_html_file("ECGC\\dev_tools\\test1.html", link)

if __name__ == "__main__":
    main()
