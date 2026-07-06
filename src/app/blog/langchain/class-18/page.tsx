import LangChainLessonLayout from "@/components/LangChainLessonLayout";

export default function LangChainClass18() {
  return (
    <LangChainLessonLayout slug="class-18">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#22a06b] font-semibold uppercase tracking-widest">Class 18 — AI Agents</p>
        <h1 className="text-3xl font-bold text-white">AI Agents — The ReAct Pattern</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The finale. We put tools and tool calling together to build an <span className="text-white">AI agent</span> —
          an intelligent system that takes a high-level goal and autonomously plans, decides, and executes a sequence of
          actions. We cover what agents are, the <span className="text-white">ReAct</span> design pattern, and how
          <span className="text-white"> Agent</span> + <span className="text-white">AgentExecutor</span> implement it in
          LangChain.
        </p>
      </div>

      {/* Motivation */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.1 What Problem Do Agents Solve?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Planning a Delhi → Goa trip means many manual steps: book train/flight tickets both ways, find and book a
          hotel, plan a day-by-day itinerary, arrange local transport, pay, get invoices. It&apos;s hectic — not everyone
          can do it. An <span className="text-white">AI agent</span> makes it seamless: you state your goal
          (&ldquo;create a budget itinerary from Delhi to Goa, May 1–7&rdquo;) in a chat, and the agent plans and
          executes each step, asking for your preferences and remembering them along the way. The user effort drops
          dramatically — which is why agents are becoming so popular.
        </p>
      </div>

      {/* Definition */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.2 What Is an AI Agent?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          An AI agent is an intelligent system that receives a <span className="text-white">high-level goal</span> from a
          user and autonomously plans, decides, and executes a sequence of actions using external tools, APIs, and
          knowledge sources — while <span className="text-white">maintaining context</span>, reasoning over multiple
          steps, adapting to new information, and optimizing for the intended outcome.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`AI Agent  =  LLM (reasoning engine)  +  Tools (to take actions)`}</pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          The LLM gives the agent its reasoning/decision-making; the tools give it the ability to actually act. Core
          characteristics: <span className="text-white">goal-driven</span>, can <span className="text-white">plan</span>
          and break problems into steps, is <span className="text-white">tool-aware</span> (knows which tool to use
          when), maintains <span className="text-white">context/memory</span>, and is <span className="text-white">reactive</span>
          (re-plans when something changes).
        </p>
      </div>

      {/* ReAct */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.3 The ReAct Design Pattern</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white">ReAct</span> = <span className="text-white">Reasoning + Acting</span>. It lets an
          LLM interleave internal reasoning with external actions in a structured, multi-step process. Unlike a single
          query → response, ReAct runs a loop of three things until it reaches a final answer:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            ["Thought", "The agent reasons about what to do next."],
            ["Action", "It decides a tool to use and the input to pass it."],
            ["Observation", "The tool runs and returns a result, which the agent observes."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
              <p className="text-sm font-bold text-[#22a06b]">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Example: population of France&apos;s capital</p>
          <div className="bg-[#0d1117] rounded-lg p-3 border border-white/10 mt-1">
            <pre className="text-xs text-yellow-300 font-mono leading-relaxed whitespace-pre-wrap">{`Thought: I need to find the capital of France.
Action: search_tool  |  Action Input: "capital of France"
Observation: Paris
Thought: Now I need the population of Paris.
Action: search_tool  |  Action Input: "population of Paris"
Observation: 2.1 million
Thought: I now know the final answer.
Final Answer: Paris is the capital of France and has a population of 2.1 million.`}</pre>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mt-2">
            The loop breaks when the thought is &ldquo;I now know the final answer.&rdquo; ReAct was introduced in the
            2022 paper <span className="text-white">&ldquo;ReAct: Synergizing Reasoning and Acting in Language
            Models.&rdquo;</span> Its best trait: the reasoning is <span className="text-white">transparent and
            auditable</span> — you can see everything the agent thinks and does.
          </p>
        </div>
      </div>

      {/* Building the agent */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.4 Building a ReAct Agent in LangChain</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The recipe: create tools → create an LLM → combine them into an
          <span className="text-white"> agent</span> (choosing a design pattern like ReAct via its prompt) → wrap it in
          an <span className="text-white">AgentExecutor</span> → invoke.
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`from langchain_community.tools import DuckDuckGoSearchRun
from langchain_openai import ChatOpenAI
from langchain.agents import create_react_agent, AgentExecutor
from langchain import hub

search_tool = DuckDuckGoSearchRun()          # a tool
llm = ChatOpenAI()                            # the reasoning engine

# pull a ready-made ReAct prompt from LangChain Hub (by Harrison Chase)
prompt = hub.pull("hwchase17/react")

# the agent: plans & decides which tool to use
agent = create_react_agent(llm=llm, tools=[search_tool], prompt=prompt)

# the executor: runs the ReAct loop and actually executes tools
agent_executor = AgentExecutor(agent=agent, tools=[search_tool], verbose=True)

response = agent_executor.invoke({"input": "What are 3 ways to reach Goa from Delhi?"})
print(response["output"])`}</pre>
        </div>
      </div>

      {/* Agent vs AgentExecutor */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.5 Agent vs AgentExecutor</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">Agent — the brain</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Does the planning: reasons (Thought), breaks the problem down, and decides which tool to use with what
              input. Given the <span className="text-white">user query</span> + the <span className="text-white">agent
              scratchpad</span> (the thought trace so far), it returns either an
              <span className="text-white"> AgentAction</span> or an <span className="text-white">AgentFinish</span>.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-1.5">
            <p className="text-sm font-bold text-[#22a06b]">AgentExecutor — the doer</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Orchestrates the whole ReAct loop and actually <span className="text-white">executes the tool</span> the
              agent chose, collects the observation, appends it to the scratchpad, and feeds it back to the agent — until
              an AgentFinish appears.
            </p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">The loop, step by step</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            (1) AgentExecutor sends the agent the user query + current scratchpad. (2) The agent generates a Thought and
            returns an <span className="text-white">AgentAction</span> (tool + input). (3) AgentExecutor runs that tool
            and gets an <span className="text-white">observation</span>. (4) It appends the observation to the scratchpad
            and loops back to step 1. When the agent instead returns an
            <span className="text-white"> AgentFinish</span> (with the final answer in its return values), the loop
            breaks and the user gets the output.
          </p>
        </div>
      </div>

      {/* create_react_agent internals */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.6 The ReAct Prompt &amp; the Scratchpad</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">create_react_agent</code> needs an LLM and
          a <span className="text-white">prompt</span> that teaches the model to behave like a ReAct agent. You can write
          it yourself, but it&apos;s better to pull a proven one from <span className="text-white">LangChain Hub</span>
          (a &ldquo;GitHub for prompts&rdquo;). The ReAct prompt lays out the exact
          Question → Thought → Action → Action Input → Observation format and loops it N times until &ldquo;I now know the
          final answer.&rdquo;
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">agent_scratchpad = memory</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The prompt has an <code className="text-[#22a06b] bg-[#22a06b]/10 px-1 rounded text-xs">agent_scratchpad</code>
            slot that holds the growing thought trace (every Thought/Action/Observation so far). Each iteration re-sends
            the whole scratchpad, so the agent effectively has memory of what it&apos;s done. This is why a single user
            query becomes a <span className="text-white">multi-turn</span> interaction with the LLM — you prompt it
            repeatedly, each time with a bigger scratchpad, until it produces a final answer.
          </p>
        </div>
      </div>

      {/* Improving: custom tool */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.7 Improving It — Adding a Weather Tool</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Give the agent a second, custom tool that fetches a city&apos;s current weather from an API. Now it can answer
          multi-step questions that need both tools — e.g. &ldquo;find the capital of Madhya Pradesh, then its current
          weather.&rdquo;
        </p>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-white/10">
          <pre className="text-sm text-yellow-300 font-mono leading-loose whitespace-pre-wrap">{`import requests
from langchain_core.tools import tool

@tool
def get_weather_data(city: str) -> str:
    """Fetch the current weather condition for a given city."""
    url = f"https://api.weatherstack.com/current?access_key=YOUR_KEY&query={city}"
    return requests.get(url).json()

agent = create_react_agent(llm=llm, tools=[search_tool, get_weather_data], prompt=prompt)
agent_executor = AgentExecutor(agent=agent, tools=[search_tool, get_weather_data], verbose=True)

agent_executor.invoke({"input": "Find the capital of Madhya Pradesh, then find its current weather condition."})
# Thought -> search "capital of MP" -> Observation: Bhopal
# Thought -> get_weather_data("Bhopal") -> Observation: 40C, partly cloudy
# Final Answer: The capital of MP is Bhopal and it is partly cloudy...`}</pre>
        </div>
      </div>

      {/* The twist: LangGraph */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">18.8 One Last Twist — Use LangGraph</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The bad news: this way of building agents is now considered <span className="text-white">somewhat outdated</span>.
          For industry-grade, scalable agents, LangChain itself recommends <span className="text-white">LangGraph</span>
          — a separate library better suited to building solid, scalable AI agents. This class showed that building
          agents in plain LangChain <span className="text-white">is possible</span> (and gives you a real feel for how
          agents and ReAct work internally) — it&apos;s just not the recommended path going forward.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "An AI agent takes a high-level goal and autonomously plans, decides, and executes actions using tools/APIs while maintaining context.",
            "AI Agent = LLM (reasoning engine) + Tools (actions). Agents are goal-driven, plan, are tool-aware, keep context, and re-plan reactively.",
            "ReAct (Reasoning + Acting) runs a Thought -> Action -> Observation loop until a final answer; its reasoning is transparent and auditable.",
            "Build a ReAct agent: create tools + an LLM, pull a ReAct prompt from LangChain Hub, create_react_agent(...), wrap in AgentExecutor, then invoke.",
            "The Agent is the brain (plans, returns an AgentAction or AgentFinish); the AgentExecutor orchestrates the loop and actually executes tools.",
            "The agent_scratchpad holds the growing thought trace (memory); re-sending it each iteration makes a single query a multi-turn LLM interaction.",
            "Adding more tools (e.g. a custom weather API tool) lets the agent solve multi-step, multi-tool problems.",
            "This LangChain approach works but is dated; for scalable, industry-grade agents, LangChain recommends LangGraph.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#22a06b]/20 text-[#22a06b] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      {/* Next up */}
      <div className="bg-[#22a06b]/5 border border-[#22a06b]/30 rounded-xl p-4">
        <p className="text-xs font-semibold text-[#22a06b] uppercase tracking-widest mb-1">End of the Playlist 🎉</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          That wraps up the LangChain series — from fundamentals, through RAG, to agents. The natural next step for
          building powerful, scalable agents is <span className="text-white">LangGraph</span>, a story for its own
          series.
        </p>
      </div>
    </LangChainLessonLayout>
  );
}
