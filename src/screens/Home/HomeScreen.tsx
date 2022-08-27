import { useQuery } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

import {
  Body,
  Container,
  Header,
  HeaderAvatar,
  HeaderTitle,
  SearchField,
  SearchFieldPlaceholder,
  SearchFieldIcon,
  HeadingTitle,
  BookList,
  CategoryList,
} from "./styles";
import { api, BookListData, CategoryItem } from "../../service/api";
import CategoryCard from "../../components/CategoryCard";
import BookCard from "../../components/BookCard";
import { mockBooks } from "../../Mock/books";

const HomeScreen: React.FC = () => {
  const { data: bookLists } = useQuery(
    ["books-overview-list"],
    api.getBookLists,
    { initialData: mockBooks }
  );
  const { data: categories } = useQuery(
    ["categories-list"],
    api.getCategories,
    { initialData: [] }
  );

  return (
    <>
      <StatusBar style="dark" />
      <Container>
        <ScrollView>
          <Header>
            <HeaderTitle>BookShelf</HeaderTitle>
            <HeaderAvatar source={{ uri: "https://github.com/fmcalado.png" }} />
          </Header>

          <Body>
            <SearchField>
              <SearchFieldPlaceholder>
                Qual livro você gostaria de ler hoje?
              </SearchFieldPlaceholder>
              <SearchFieldIcon
                source={require("../../assets/icons/search.png")}
              />
            </SearchField>

            <HeadingTitle>Pra você</HeadingTitle>
            <BookList
              horizontal
              data={bookLists}
              renderItem={({ item: bookList }: { item: BookListData }) => (
                <BookCard
                  author={bookList.books[0].author}
                  category={bookList.display_name}
                  categoryEncoded={bookList.list_name_encoded}
                  description={bookList.books[0].description}
                  imageUrl={bookList.books[0].book_image}
                  title={bookList.books[0].title}
                />
              )}
            />

            <HeadingTitle>Categorias</HeadingTitle>
            <CategoryList
              horizontal
              data={categories}
              renderItem={({ item }: { item: CategoryItem }) => (
                <CategoryCard
                  name={item.display_name}
                  encodedName={item.list_name_encoded}
                />
              )}
            />

            <HeadingTitle>Os mais lidos da semana</HeadingTitle>
            <BookList
              horizontal
              data={bookLists}
              renderItem={({ item: bookList }: { item: BookListData }) => (
                <BookCard
                  author={bookList.books[0].author}
                  category={bookList.display_name}
                  categoryEncoded={bookList.list_name_encoded}
                  description={bookList.books[0].description}
                  imageUrl={bookList.books[0].book_image}
                  title={bookList.books[0].title}
                />
              )}
            />
          </Body>
        </ScrollView>
      </Container>
    </>
  );
};

export default HomeScreen;
