

const Accordion = () => {
    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center">Find Your Answer From Here</h2>
            <p className="text-xl font-semibold text-center mb-8 mt-3">We are here to help. Get in touch and we will get back to you as soon as we can.</p>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                     What is the significance of the Olympic motto: Citius, Altius, Fortius?
                </div>
                <div className="collapse-content">
                    <p>The Olympic motto is in Latin and translates to Faster, Higher, Stronger. It represents the athletes pursuit of reaching their best performance and breaking records.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of the offside rule in soccer?
                </div>
                <div className="collapse-content">
                    <p>The offside rule prevents attacking players from positioning themselves closer to the opponent &apos;s goal line than both the ball and the second-to-last defender when the ball is played to them. This rule encourages active and skillful play.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How does the tie-breaking system work in tennis Grand Slam tournaments?
                </div>
                <div className="collapse-content">
                    <p>In most Grand Slam tournaments, including Wimbledon and the US Open, a tiebreaker is played in the final set if the set score reaches 6-6. The first player to reach 7 points with a margin of 2 points wins the tiebreaker and the set.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What does the term Hat-trick mean in sports, especially in cricket and soccer?
                </div>
                <div className="collapse-content">
                    <p>In sports like cricket and soccer, a hat-trick refers to a player accomplishing a notable feat. In cricket, it means a bowler taking three wickets in three consecutive deliveries. In soccer, it refers to a player scoring three goals in a single game.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What is the concept of &quot;Fair Play&quot; in sports ethics?
                </div>
                <div className="collapse-content">
                    <p>Fair Play in sports refers to playing in a respectful and honest manner, adhering to the rules, and showing consideration for opponents and teammates. It promotes sportsmanship, integrity, and mutual respect among competitors.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;