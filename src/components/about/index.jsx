
import React from 'react'
import ItemLayout from './itemLayout'

const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>

                {/* About Me */}
                <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                        Architect of Enchantment
                    </h2>
                    <p className='font-light text-xs sm:text-sm md:text-base'>
                        My foray into web development started in 2002, where I delved into the intricacies of front-end technologies such as HTML, CSS, and JavaScript. In 2017, I expanded my knowledge to include backend languages like Python and Java. The year 2021 marked my venture into database management with a focus on SQL. Building on this foundation, I entered the realm of cloud computing in 2022, exploring the vast possibilities offered by AWS.
                    </p>
                </ItemLayout>

                {/* Client Number */}
                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
                    <p className='font-semibold w-full text-left text:2xl sm:text-5xl'>
                        25+ <sub className='font-semibold text-base'>clients</sub>
                    </p>
                </ItemLayout>

                {/* Years Of Experience */}
                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
                    <div className='font-semibold w-full text-left text:2xl sm:text-5xl'>
                        4+ <sub className='font-semibold text-base'>Years Of Experience</sub>
                    </div>
                </ItemLayout>

                {/* Most Used Languages */}
                <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/?username=JackSawyerWATX&theme=transparent&hide_border=true&text_color=FFFFFF&title_color=FEFE5B&icon_color=FEFE5B&text_bold=false' alt='JackSawyer' loading='lazy' />
                </ItemLayout>

                {/* GitHub Stats */}
                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=JackSawyerWATX&theme=transparent&hide_border=true&text_color=FFFFFF&title_color=FEFE5B&icon_color=FEFE5B&text_bold=false' alt='JackSawyer' loading='lazy' />
                </ItemLayout>

                {/* Skills Icons */}
                <ItemLayout className={"col-span-full"}>
                    <img className='w-full h-auto' src='https://skillicons.dev/icons?i=js,html,css,bootstrap,tailwind,threejs,gatsby,py,java,linux,powershell,ts,vue,nodejs,django,flask,express,git,spring,react,jquery,postgres,mongodb,sqlite,mysql,dynamodb,tensorflow,pytorch,sklearn,vscode,pycharm,idea,replit,redhat,github,aws' alt='JackSawyer' loading='lazy' />
                </ItemLayout>

                {/* GitHub Streak */}
                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=JackSawyerWATX&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="JackSawyer GitHub Streak" loading="lazy" />
                </ItemLayout>

                {/* GitHub Repo */}
                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img className='w-full h-auto' src='https://githubstats-self.vercel.app/api/pin/?username=JackSawyerWATX&repo=create-delete-commnets-with-express&theme=transparent&hide_border=true&text_color=FFFFFF&title_color=FEFE5B&icon_color=FEFE5B&text_bold=false&description_lines_count=2' alt='JackSawyer' loading='lazy' />
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails