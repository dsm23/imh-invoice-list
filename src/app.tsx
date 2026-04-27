import { FormInvnos, FormInvnosOutput } from "~/components/form-invnos";
import { ThemeProvider } from "~/components/theme-provider";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { Card, CardContent } from "~/components/ui/card";

const App = () => (
  <ThemeProvider>
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-4xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              IMH Invoice numbers list
            </h1>
            <p className="mb-6 max-w-4xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              This webpage is to generate the IMH invnos list previously created
              manually in MS Word.
            </p>
            <Card className="w-full">
              <CardContent>
                <FormInvnos>
                  <FormInvnosOutput />
                </FormInvnos>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
    <footer className="mx-auto flex w-full items-center justify-center border-t py-16 text-center text-xs">
      <ThemeSwitcher />
    </footer>
  </ThemeProvider>
);

export default App;
